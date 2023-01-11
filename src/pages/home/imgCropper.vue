<template>
	<div>
		<el-button @click="dialogVisible = true">上传头像</el-button>
		<avatar-cropper v-model="dialogVisible" @closeAvatarDialog="closeAvatarDialog"></avatar-cropper>
	</div>
</template>

<script>
	// 参考：https://blog.csdn.net/weixin_43848576/article/details/121118876
	// 参考文档：https://github.com/xyxiao001/vue-cropper
	import avatarCropper from '../../components/avatarCropper.vue'
	export default {
		components: {
			avatarCropper
		},
		data() {
			return {
				dialogVisible: false
			}
		},
		methods: {
			closeAvatarDialog(data) {
				console.log(data)
				this.dialogVisible = false
			}
		}
	}
</script>
