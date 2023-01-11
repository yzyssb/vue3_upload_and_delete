<template>
	<slot :list="list" :obj="obj" />
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const list=ref([
		{
			id:1,
			title:'标题1'
		},
		{
			id:2,
			title:'标题2'
		},
		{
			id:3,
			title:'标题3'
		}
	])
	const obj=ref({
		name:'杨志远',
		age:'30'
	})
</script>

<style scoped>
</style>