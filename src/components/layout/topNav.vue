<template>
	<div class="header fx-row-fs-c">
		<el-icon :size="30" color="#666" class="pointer">
			<Expand v-show="!isCollapse" @click="isCollapse=!isCollapse" />
			<Fold v-show="isCollapse" @click="isCollapse=!isCollapse" />
		</el-icon>
	</div>
	
</template>

<script lang="ts" setup>
	import {
		computed
	} from 'vue'
	import {
	  Expand,Fold
	} from '@element-plus/icons-vue'
	import { useLayoutStore } from '../../store/modules/layout'
	
	const layoutStore=useLayoutStore()
	const isCollapse=computed({
		set(val:boolean){
			layoutStore.isCollapse=val
		},
		get(){
			return layoutStore.isCollapse
		}
	})
</script>

<style lang="scss" scoped>
	.header{
		height: 70px;
		padding-left: 180px;
		@include border-b(1px,#eee);
	}
</style>