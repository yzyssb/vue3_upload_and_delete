<template>
	<!-- tempalte部分 -->
	<div>
		<el-upload class="upload-demo" ref="upload" :on-change="initFfmpeg"
			:auto-upload="false">
			<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
		</el-upload>
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
	// import { writeFile } from 'fs/promises';
	export default {
		data(){
			return{
				percentage:0,
				vedioSrc:'',
				
				t:0,
				timer:null
			}
		},
		created() {
			
		},
		methods: {

			//初始化
			initFfmpeg(file) {
				const ffmpeg = createFFmpeg({ log: true });
				
				(async () => {
					const {
						name
					} = file;
				  await ffmpeg.load();
				  // ffmpeg.FS('writeFile', 'SampleVideo_1280x720_30mb.mp4', await fetchFile('./SampleVideo_1280x720_30mb.mp4'));
				  ffmpeg.FS('writeFile', encodeURI('视频.mp4'), await fetchFile('./视频.mp4'));
				  await ffmpeg.run("-i",encodeURI('视频.mp4'),"-c:v","libx264","-threads", "5", "-b", "700000","-strict","-2", "test.mp4");
				  // await ffmpeg.run('-i', 'SampleVideo_1280x720_30mb.mp4', 'test.mp4');
				  // await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
				  ffmpeg.FS("writeFile", './test.mp4', ffmpeg.FS('readFile', 'test.mp4'))
				})();
			},
			timeFilter(t){
				let m=parseInt(t/60),
					  s=t%60
				return `${m}分${s}秒`
			}
		},
		beforeDestroy() {
			if(this.timer){
				clearInterval(this.timer)
				this.timer=null
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
