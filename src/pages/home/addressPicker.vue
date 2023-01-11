<template>
	<iframe id="mapPage" width="100%" height="900px"
		src="https://apis.map.qq.com/tools/locpicker?type=1&key=HP4BZ-3UGER-QLIW5-WCL4P-T237Z-EIBP3&referer=referer">
	</iframe>
</template>

<script lang="ts" setup>
	import {
		onMounted
	} from 'vue';
	onMounted(() => {
		window.addEventListener('message', function(event) {
			// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
			var loc = event.data;
			if (loc && loc.module == 'locationPicker') { //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				console.log('location', loc);
			}
		}, false)
	})
</script>

<style>
</style>
