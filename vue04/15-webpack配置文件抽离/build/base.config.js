const path=require('path')  /* 这个不是我们定义的是node里面定义的path*/
const webpack =require('webpack')/* 横幅插件是webpack自带的插件所以我们导入webpack */
const  htmlWebpackPlugin=require('html-webpack-plugin')/* 这个是生成Html模板的插件 */
const  uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')/* 丑化我们打包后js的代码进行压缩 去掉注释和空格把变量名改成最简单的形式 */
module.exports={
	entry: './src/main.js',
	output:{
		path: path.resolve(__dirname,'../dist'),  /*双下划线dirname __dirname 是node里面定义好的变量与dist拼接 这里需要写上绝对路径,我们应该获取动态的绝对路径*/
		filename: 'bundle.js',/* 文件名称 */
		// publicPath: 'dist/',
	},
	  module: {
	         rules: [
						 {
							 test: /\.css$/,
							 use: [ 
							 								 {
							     loader: "style-loader" // creates style nodes from JS strings
							 }, {
							     loader: "css-loader" // translates CSS into CommonJS
							 }
							]
						 },
						 {
	             test: /\.less$/,
	             use: [ 
								 {
	                 loader: "style-loader" // creates style nodes from JS strings
	             }, {
	                 loader: "css-loader" // translates CSS into CommonJS
	             },
							 {
	                 loader: "less-loader" // compiles Less to CSS
	             }]
	         },
					 {
						 test: /\.(png|jpg|gif)$/,
						   use: [
						           {
						             loader: 'url-loader',
						             options: {
						               limit: 8192,
													 name: 'img/[name].[hash:8].[ext]'
						             }
						           }
						         ]
						       
					 },
				/* 	 {
					       test: /\.m?js$/,
					       exclude: /(node_modules|bower_components)/,
					       use: {
					         loader: 'babel-loader',
					         options: {
					           presets: ['es2015']
					         }
					       }
					     } */
							  {
							       test: /\.js$/,
							       exclude: /(node_modules|bower_components)/,
							       use: {
							         loader: 'babel-loader',
							         options: {
							           presets: ['es2015'] //需要转换的版本 es2015 ==>ES6 将es6转换为es5
							         }
							       }
							     },
									 {
										
										test: /\.vue$/,
										use:['vue-loader']
										}
					 ],
	         

			 },
  resolve: {
		//解决扩展名，导入时可以省略这些扩展名
		 extensions: ['.js', '.css', '.vue'],
    // alias: 别名
   
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
	plugins: [
							 new webpack.BannerPlugin('最终所有权归嘻嘻嘻嘻'),
							 new htmlWebpackPlugin({
								 template: 'src/index.html'
							 }), 
							 ],

};