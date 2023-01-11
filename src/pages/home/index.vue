<template>
	<div>
		<el-upload class="upload-demo" ref="upload" :on-change="initFfmpeg" :auto-upload="false"
			:show-file-list="false">
			<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
		</el-upload>
		<el-row :gutter="20">
			<el-col :span="6">
				preset：
				<el-select v-model="query.a">
					<el-option v-for="item in list1" :key="item" :label="item" :value="item" />
				</el-select>
			</el-col>
			<el-col :span="6">
				压缩率：
				<el-input-number v-model="query.b" :step="100000" :min="700000" :max="5000000" />
			</el-col>
			<el-col :span="6">
				分辨率：
				<el-select v-model="query.c" clearable>
					<el-option v-for="item in list2" :key="item" :label="item" :value="item" />
				</el-select>
			</el-col>
		</el-row>
		<p v-if="percentage">进度：{{percentage}}</p>
		<p v-if="t">耗时：{{timeFilter(t)}}</p>
		<video v-if="vedioSrc" :src="vedioSrc" controls style="width:375px;" />
	</div>
</template>
<script>
	//引入
	import {
		createFFmpeg,
		fetchFile
	} from "@ffmpeg/ffmpeg";
	export default {
		data() {
			return {
				percentage: 0,
				vedioSrc: '',

				t: 0,
				timer: null,
				
				query:{
					a:'ultrafast',
					b:700000,
					c:''
				},
				
				list1:['medium','fast','faster','veryfast','superfast','ultrafast'],
				list2:['3840x2160','2560x1440','1920x1080','1600x900','1366x768','1280x720','1024×576','320x200'],
			}
		},
		created() {},
		methods: {
			//初始化
			initFfmpeg(file) {
				try {
					let start = new Date().getTime()
					this.t = 0
					if (this.timer) {
						clearInterval(this.timer)
						this.timer = null
					}
					this.timer = setInterval(() => {
						this.t++
					}, 1000)
					const ffmpeg = createFFmpeg({
						corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
						log: false,
					});
					//设置进度条
					ffmpeg.setProgress(({
						ratio
					}) => {
						// console.log(ratio);
						this.percentage = Math.floor(ratio * 100);
					});
					//开始压缩
					const transcode = async (file) => {
						const {
							name
						} = file;
						await ffmpeg.load();

						var reader = new FileReader();
						reader.addEventListener('load', async (loadEvent) => {
							var buffer = loadEvent.target.result;
							var uint8Array = new Uint8Array(buffer);

							// 中文名称转成utf-8编码
							ffmpeg.FS("writeFile", encodeURI(name), uint8Array)
							// await ffmpeg.run("-i",encodeURI(name), "-b", "700000", "output.mp4");
							// 压缩速度 
							// 参考链接：https://blog.csdn.net/qq_45662588/article/details/120403429
							// 30M
							// fast:2分43秒
							// faster:2分3秒
							// veryfast:1分25秒
							// superfast:46秒
							// ultrafast:25秒
							// , "-preset", "ultrafast"
							// ,"-c:v","libx264", "-preset", "ultrafast","-threads", "5",  "-r", "24", "-b", "2000000","-crf","28","-s","320x200","-strict","-2"
							let query=this.query
							if(!!query.c==false){
								await ffmpeg.run("-i", encodeURI(name), "-preset", query.a, "-b",
									query.b.toString(), "output.mp4");
							}else{
								await ffmpeg.run("-i", encodeURI(name), "-preset", query.a, "-b",
									query.b.toString(), "-s",query.c, "output.mp4");
							}
							

							let deltaT = (new Date().getTime() - start) / 1000,
								m = parseInt(deltaT / 60),
								s = deltaT % 60
							if (this.timer) {
								clearInterval(this.timer)
								this.timer = null
							}
							console.log(`耗时${m}分${s}秒`)

							const data = ffmpeg.FS("readFile", "output.mp4");
							console.log(data)
							this.fileBytes = data.byteLength;
							//把压缩后的视频进行回显
							this.vedioSrc = URL.createObjectURL(
								new Blob([data.buffer], {
									type: "video/mp4"
								})
							);

							let newFile = new File([new Blob([data.buffer], {
								type: "video/mp4"
							})], name, {
								type: "video/mp4",
								lastModified: Date.now()
							});
							console.log(newFile)

							this.downloadFile(newFile)
						});
						reader.readAsArrayBuffer(new Blob([file.raw], {
							type: "text/plain;charset=utf-8"
						}));
					};
					transcode(file);
				} catch (e) {
					//TODO handle the exception
					alert('压缩失败')
				}
			},
			downloadFile(file) {
				let aTag = document.createElement('a'); //创建一个a标签
				aTag.download = file.name;
				let href = URL.createObjectURL(file); //获取url
				aTag.href = href;
				aTag.click();
				URL.revokeObjectURL(href); //释放url
			},
			timeFilter(t) {
				let m = parseInt(t / 60),
					s = t % 60
				return `${m}分${s}秒`
			}
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
