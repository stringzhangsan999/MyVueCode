const path=require('path')  /* 这个不是我们定义的是node里面定义的path*/

module.exports={
	entry: './src/main.js',
	output:{
		path: path.resolve(__dirname,'dist'),  /*双下划线dirname __dirname 是node里面定义好的变量与dist拼接 这里需要写上绝对路径,我们应该获取动态的绝对路径*/
		filename: 'bundle.js',/* 文件名称 */
		publicPath: 'dist/'
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
							     }
					 ]
	     },

};