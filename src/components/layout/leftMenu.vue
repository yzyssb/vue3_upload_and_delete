<template>
	<el-menu default-active="/pdf" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true" @open="handleOpen"
		@close="handleClose">
		<el-menu-item v-for="item in menus" :index="item.id">
			<el-icon>
				<component :is="item.icon"></component>
			</el-icon>
			<template #title>{{item.title}}</template>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
	import {
		computed,
		reactive
	} from 'vue'
	import {
		useLayoutStore
	} from '../../store/modules/layout'
	import {
		Setting,
		Coin,
		Present,
		Magnet,
		Crop,
		Compass
	} from '@element-plus/icons-vue'

	const layoutStore = useLayoutStore()
	const isCollapse = computed({
		set(val: boolean) {
			layoutStore.isCollapse = val
		},
		get() {
			return layoutStore.isCollapse
		}
	})

	const menus = reactive([{
			title: '测试',
			id: '/test',
			icon: Present
		},
		{
			title: 'pdf预览',
			id: '/pdf',
			icon: Present
		},
		{
			title: '图片排序',
			id: '/drag',
			icon: Magnet
		},
		{
			title: '图片裁剪',
			id: '/imgCropper',
			icon: Crop
		},
		{
			title: '拖拽排序',
			id: '/drag',
			icon: Coin
		},
		{
			title: '视频压缩',
			id: '/',
			icon: Setting
		},
		{
			title: '颜色选择器',
			id: '/colorPicker',
			icon: Compass
		},
	])

	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
</script>

<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 180px;
		min-height: 400px;
	}
</style>
