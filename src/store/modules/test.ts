import { defineStore } from 'pinia'

// 第一个参数必须是全局唯一，可以是哟
export const useTestStore = defineStore('test', {
  state:()=>({
	  count:0
  }),
  actions:{
	  countChange(){
		this.count++  
	  }
  }
})