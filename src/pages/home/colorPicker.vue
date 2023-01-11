<template>
	<color-picker @change="change" v-model:hex="hex" @close="close" @finish="finish"></color-picker>
</template>

<script lang="ts" setup>
	// 参考：https://colorpickerv3.wcrane.cn/guide/#events
	import {
		ref
	} from 'vue';
	const hex = ref("#eee");
	const change = (e: any) => {
		console.log(e); // {hex: '#ddd8c3', rgba: 'rgba(221,216,195,0.5849)'}
	}
	// 颜色面板关闭
	const close = (e) => {
		console.log("关闭了", e)
	}

	const finish = (e) => {
		console.log("点击完成", e)
	}
</script>

<style>
</style>
