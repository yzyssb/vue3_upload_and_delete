<template>
	111
	
	<scoped-slot>
		<template #default="{list,obj}">
			<p v-for="(v,i) in list" :key="i">{{v.title}}</p>
			
			<h4>{{obj.name}}-{{obj.age}}</h4>
		</template>
	</scoped-slot>
</template>

<script lang="ts" setup>
	import scopedSlot from './作用域插槽.vue'
</script>

<style>
</style>