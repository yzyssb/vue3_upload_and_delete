<template>
	<div class="container">
		<!-- 头部 -->
		<top-nav />
		<el-row class="main fx-row">
			<!-- 左侧菜单 -->
			<left-menu class="menus" />
			<main class="fx-1">
				<router-view />
			</main>
		</el-row>
	</div>
</template>
<script lang="ts" setup>
	import {
		defineAsyncComponent
	} from 'vue'
	const leftMenu = defineAsyncComponent(() => import('./components/layout/leftMenu.vue'))
	const topNav = defineAsyncComponent(() => import('./components/layout/topNav.vue'))

	const jsonp=(url:string) => {

		return new Promise((resolve, reject) => {

			// 这里的 "jsonCallBack" ，和调用的 jsonp 的 url 中的 callback 值相对应（见粗体字）

			window.jsonCallBack = (result) => {

				resolve(result)

			}

			const JSONP = document.createElement('script');

			JSONP.type = 'text/javascript';

			JSONP.src = url;

			document.getElementsByTagName('head')[0].appendChild(JSONP);

			setTimeout(() => {

				document.getElementsByTagName('head')[0].removeChild(JSONP)

			}, 500)

		})

	}
	
	jsonp(`https://apis.map.qq.com/ws/district/v1/list?key=HP4BZ-3UGER-QLIW5-WCL4P-T237Z-EIBP3&output=JSONP&callback=jsonCallBack`).then(res=>{
		console.log(res)
	})
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.main {
			flex: 1;
			height: 0;

			.menus {
				max-width: 200px;
				flex-shrink: 0;
			}

			main {
				padding: 15px;
				flex: 1;
			}
		}
	}
</style>
