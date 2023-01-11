<template>
	<div class="block-page">
		<el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize"
			:page-sizes="[100, 200, 300, 400]" layout="sizes, prev, pager, next,slot" :total="total"
			background @size-change="sizeChange" @current-change="pageChange">
			<span class="page-total">共{{pageCount}}页/{{total}}条数据</span>
		</el-pagination>
	</div>
</template>

<script>
	import { ref } from 'vue'
</script>
<script setup>
	let currentPage = ref(1)
	let pageSize = ref(100)
	let pageCount = ref(50)
	let total = ref(4000)
	
	const sizeChange = (num) => {
		console.log(num)
	}
	
	const pageChange = (num) => {
		console.log(num)
	}
</script>

<style lang="scss" scoped>
	:deep(.el-pagination){
		margin-top: 22px;
		justify-content: flex-end;
		.el-input__wrapper{
			height: 39px;
			box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
			.el-input__inner{
				@include font(17px,#000,400,auto);
			}
		}
		.el-pager{
			li{
				@include whb(39px,39px,#fff !important);
				@include border(1px,rgba(0,0,0,0.15));
				@include font(17px,#000,400,auto);
				&.is-active+li{
					border-left: 1px solid rgba(0,0,0,0.15);
				}
			}
		}
		&.is-background{
			.el-pager li:not(.is-disabled).is-active{
				border-color: #3C90FD;
				color: #3C90FD;
			}
			.btn-prev,.btn-next{
				@include whb(39px,39px,#fff !important);
				@include border(1px,rgba(0,0,0,0.15));
			}
		}
	}
	.page-total {
		margin-left: 20px;
		@include font(20px !important, #999, 400, 28px !important);
	}
</style>