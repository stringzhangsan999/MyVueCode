const  uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')/* 丑化我们打包后js的代码进行压缩 去掉注释和空格把变量名改成最简单的形式 */
module.exports={
	plugins: [
							 new uglifyjsWebpackPlugin(),
							 ],
};