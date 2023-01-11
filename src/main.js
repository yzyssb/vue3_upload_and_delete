import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from './api/axios'
import router from './router'
import pinia from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import 'amfe-flexible';
import ColorPicker from 'colorpicker-v3'  // 注册组件
import 'colorpicker-v3/style.css' // 引入样式文件

const app=createApp(App)
app.config.globalProperties.$axios=axios
app.use(router).use(ElementPlus,{locale}).use(pinia).use(ColorPicker).mount('#app')