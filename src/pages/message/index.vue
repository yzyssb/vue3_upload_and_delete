<template>
	<div class="page">
		<div class="title">消息中心</div>
		<div class="btns">
			<el-button plain class="msg-all">全部消息</el-button>
			<el-button plain class="msg-unread">未读消息</el-button>
		</div>
		<div class="block">
			<el-table :data="tableData" style="width: 100%" ref="multipleTableRef" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" />
				<el-table-column label="状态" width="100">
					<template #default="scope">
						<span class="status" :class="{unread:scope.row.a=='未读'}">{{scope.row.a}}</span>
					</template>
				</el-table-column>
				<el-table-column label="消息内容">
					<template #default="scope">
						<span class="msg">{{scope.row.b}}</span>
					</template>
				</el-table-column>
				<el-table-column label="时间" width="300">
					<template #default="scope">
						<span class="time">{{scope.row.c}}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="200">
					<template #default="scope">
						<el-button type="text" class="btn-look" @click="lookAction(scope.row)">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			
			<div class="block-footer fx-row-sb-c">
				<div class="footer-lt fx-row-fs-c">
					<el-checkbox v-model="allChecked">全选</el-checkbox>
					<el-button type="text" class="sign-read">标记已读</el-button>
				</div>
				
				<custom-pagination />
			</div>
		</div>
	</div>
	
	<div class="dialog">
		<el-dialog v-model="dialogVisible" title="查看消息" width="510px" draggable>
		    <p class="dialog-title">订单提醒/商品审核提醒</p>
			<p class="dialog-time">2022-07-31 10:30:21</p>
			<p class="dialog-cont">您有新的曙光妙医订单123456，请及时处理。</p>
			<p class="dialog-cont">创建的商品【基因检测名称】、【检查名称】已通过审核，可对创建的商品进行售卖啦！</p>
		    <template #footer>
		      <span class="dialog-footer">
		        <el-button @click="dialogVisible = false" class="btn-close">关闭</el-button>
		      </span>
		    </template>
		  </el-dialog>
	</div>
</template>

<script>
	import { reactive,ref } from 'vue'
	import customPagination from '../../components/pagination.vue'
</script>
<script setup>
	const tableData = reactive([{
			a: '未读',
			b: '您有新的曙光妙医订单123456，请及时',
			c: '2022-07-29 10:30:12',
		},
		{
			a: '已读',
			b: '创建的商品【基因检测名称】、【检查名称】,已通…',
			c: '2022-07-29 10:30:12',
		}
	])
	
	let multipleSelection=ref([])
	const handleSelectionChange = (val) => {
	  multipleSelection.value = val
	}
	
	let dialogVisible=ref(false);
	const lookAction=(item)=>{
		console.log(item)
		dialogVisible.value=true
	}
</script>

<style lang="scss" scoped>
	.page{
		min-height: 100vh;
		padding: 30px 63px 30px 30px;
		background: #F4F5F9;
	}
	
	.title {
		@include font(28px, #333, bold, 40px);
	}
	
	.btns{
		margin-top: 21px;
		:deep(.el-button){
			@include border-rad(26px);
			@include whb(128px,51px,#fff);
		}
		.msg-all{
			background-color: #3C90FD;
			@include font(20px,#fff,400,51px);
		}
		.msg-unread{
			@include font(20px,#3C90FD,400,51px);
			border-color: #3C90FD;
		}
	}
	
	.block{
		margin-top: 26px;
		@include border-rad(20px);
		padding: 30px;
		background: #fff;
		
		:deep(table tr .el-table__cell:first-child .cell) {
			padding-left: 30px;
		}
		
		:deep(.el-checkbox__inner){
			transform: scale(calc(26/14));
			transform-origin: center;
		}
		
		.status{
			@include font(20px,#999,400,28px);
			&.unread{
				color: #EB2325;
			}
		}
		.msg{
			@include font(20px,#333,bold,28px);
		}
		.time{
			@include font(20px,#999,400,28px);
		}
		.btn-look{
			@include font(20px,#3C90FD,400,28px);
		}
		
		.block-footer{
			padding-left: 30px;
			.footer-lt{
				:deep(.el-checkbox__label){
					padding-left: 14px;
					@include font(22px,#999,400,30px);
				}
				.sign-read{
					@include font(22px,#3C90FD,400,30px);
					margin-left: 30px;
				}
			}
		}
	}
	
	.dialog{
		:deep(.el-dialog){
			@include border-rad(20px);
			overflow: hidden;
			.el-dialog__header{
				@include whb(100%,68px,#F4F5F9);
				padding: 0 30px;
				@include font(20px,#333,bold,68px);
				.el-icon.el-dialog__close{
					font-size: 18px;
				}
			}
			.el-dialog__body{
				padding: 20px 30px 40px;
				.dialog-title{
					@include font(20px,#333,bold,28px);
				}
				.dialog-time{
					@include font(16px,#999,400,22px);
					margin-top: 10px;
				}
				.dialog-cont{
					@include font(18px,#333,400,25px);
					margin-top: 20px;
				}
			}
			.el-dialog__footer{
				text-align: center;
				.btn-close{
					@include whb(118px,52px,#3C90FD);
					@include border-rad(31px);
					@include font(20px,#fff,400,52px);
				}
			}
		}
	}
	
	:deep(.el-table) {
		thead{
			@include font(24px, #6C6C6C, bold, 33px);
			th.el-table__cell{
				background: #F6F6F7;
				height: 93px;
				border-bottom: 0 !important;
				&:first-child{
					border-radius: 20px 0 0 20px;
				}
				&:last-child{
					border-radius: 0 20px 20px 0;
				}
			}
		}
		td.el-table__cell{
			height: 89px;
			@include font(22px, #333, bold, 30px);
			@include border-b(1px, #F2F2F2);
		}
		.el-table__body-wrapper .el-table-column--selection>.cell,.el-table__header-wrapper .el-table-column--selection>.cell{
			height: 26px;
		}
	}
</style>