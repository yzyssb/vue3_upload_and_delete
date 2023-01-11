import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
			dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, 'src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/public.scss";`
			}
		}
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true, //自动打开 
		proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
			// 正则表达式写法
			'^/zxd': {
				target: 'http://192.168.1.147:8080', // 后端服务实际地址=张新达
				changeOrigin: true, //开启代理
				rewrite: (path) => path.replace(/^\/zxd/, '')
			},
			'^/sh': {
				target: 'http://192.168.1.164:8080', // 后端服务实际地址=宋欢
				changeOrigin: true, //开启代理
				rewrite: (path) => path.replace(/^\/sh/, '')
			},
			'^/tj': {
				// target: 'http://www.tongjian.com:9090', // 后端服务实际地址=童剑
				// target: 'http://192.168.1.186:9069', // 后端服务实际地址=童剑
				target: 'https://preapi.zhongheonline.com', //预发布环境=童剑
				changeOrigin: true, //开启代理
				rewrite: (path) => path.replace(/^\/tj/, '')
			}
		},
		hmr: true,
		headers: {
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "require-corp"
		}
	}
})
