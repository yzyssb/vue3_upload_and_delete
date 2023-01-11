module.exports = {
	plugins: {
		'autoprefixer': {},
		'postcss-pxtorem': {
			rootValue({
				file
			}) {
				return file.indexOf('vant') !== -1 ? 37.5 : 192;
			},
			propList: ['*'], //允许哪些属性转成rem;
			unitPrecision: 5, //最多小数位数;
			selectorBlackList: [/^\.van-/, /^\.mescroll/], //忽略.van-和.mescroll开头的类名;
			replace: true,
			mediaQuery: false, //允许在媒体查询中转换px
			minPixelValue: 2, //设置要替换的最小像素值
		}
	}
}

