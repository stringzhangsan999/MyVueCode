const  uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')/* 丑化我们打包后js的代码进行压缩 去掉注释和空格把变量名改成最简单的形式 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports= webpackMerge.merge(baseConfig,{
	plugins: [
	 new uglifyjsWebpackPlugin(),
			 ]
});