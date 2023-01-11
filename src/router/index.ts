import { createRouter, createWebHistory } from 'vue-router'

//路由数组
const routes = [
	{
		path: "/",
		component: ()=>import('../pages/home/index.vue')
	},
	{
		path: "/test",
		component: ()=>import('../pages/home/test.vue')
	},
	{
		path: "/other",
		component: ()=>import('../pages/home/other.vue')
	},
	{
		path: "/message",
		component: ()=>import('../pages/message/index.vue')
	},
	{
		path: "/pdf",
		component: ()=>import('../pages/home/pdf-demo.vue')
	},
	{
		path: "/drag",
		component: ()=>import('../pages/home/ImgsDraggable.vue')
	},
	{
		path: "/sort",
		component: ()=>import('../pages/home/ImgsDragSort.vue')
	},
	{
		path: "/imgCropper",
		component: ()=>import('../pages/home/imgCropper.vue')
	},
	{
		path: "/colorPicker",
		component: ()=>import('../pages/home/colorPicker.vue')
	},
	{
		path: "/addressPicker",
		component: ()=>import('../pages/home/addressPicker.vue')
	}
]

//路由对象
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router