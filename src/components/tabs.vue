<template>
	<div>
		<el-radio-group v-model="value" @change="onChange">
			<el-radio-button :label="index" v-for="(item,index) in list">{{item}}</el-radio-button>
		</el-radio-group>
	</div>
</template>

<script>
	import {
		defineProps,
		ref,
		defineEmits
	} from 'vue'
</script>
<script setup>
	const props = defineProps({
		list: {
			type: Array, // 参数类型
			default: () => [
				'本周', '本月', '本年'
			]
		},
		value:{
			type:[Number,String],
			default:0
		}
	})

	const emit = defineEmits(['update:value'])
	const onChange = () => {
		emit('update:value', props.value)
	}
</script>

<style lang="scss" scoped>
	:deep(.el-radio-group) {
		flex-shrink: 0;
		align-items: flex-start !important;
		.el-radio-button{
			&:first-child .el-radio-button__inner{
				border-radius: 100px 0 0 100px;
				border-left: 1px solid #3C90FD;
			}
			&:last-child .el-radio-button__inner{
				border-radius: 0 100px 100px 0;
			}
			.el-radio-button__inner{
				border-color: #3C90FD;
				color: #3C90FD;
			}
			.el-radio-button__original-radio:checked+.el-radio-button__inner{
				background-color: #3C90FD;
				color: var(--el-radio-button-checked-text-color,var(--el-color-white));;
			}
		}
	}
</style>
