<template>
	<div class="pdf-wrap">
		<vue-pdf-embed v-for="(item,index) in state.pageNum" :source="state.source" class="vue-pdf-embed" :page="index" />
	</div>
</template>
<script setup lang="ts">
	// 参考：https://juejin.cn/post/7105933034771185701
	import {
		reactive,
		onMounted
	} from "vue";
	import VuePdfEmbed from "vue-pdf-embed";
	import {
		createLoadingTask
	} from "vue3-pdfjs/esm"; // 获得总页数
	const props = defineProps({
		pdfUrl: {
			type: String,
			required: true
		}
	})
	const state = reactive({
		source: props.pdfUrl,
		pageNum: 1,
		scale: 1, // 缩放比例
		numPages: 0, // 总页数
	});

	onMounted(() => {
		const loadingTask = createLoadingTask(state.source);
		loadingTask.promise.then((pdf: {
			numPages: number
		}) => {
			state.numPages = pdf.numPages;
		});
	});
</script>
<style lang="scss" scoped>
	.pdf-wrap {
		height: 100vh;
		overflow-y: auto;
		.vue-pdf-embed {
			text-align: center;
			width: 900px;
			border: 1px solid #e5e5e5;
			margin: 0 auto;
			box-sizing: border-box;

			// :deep(canvas){
			// 	opacity: 0;
			// }
			// :deep(.textLayer){
			// 	opacity: 1;
			// 	span{
			// 		color: red;
			// 	}
			// }
		}
	}

	
</style>
