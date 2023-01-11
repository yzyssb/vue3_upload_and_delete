import { defineStore } from 'pinia'

// 第一个参数必须是全局唯一，可以是哟
export const useLayoutStore = defineStore('layout', {
	state: () => ({
		isCollapse: false
	}),
	actions: {

	}
})