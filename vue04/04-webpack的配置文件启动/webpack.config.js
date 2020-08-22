const path=require('path')  /* 这个不是我们定义的是node里面定义的path*/

module.exports={
	entry: './src/main.js',
	output:{
		path: path.resolve(__dirname,'dist'),  /*双下划线dirname __dirname 是node里面定义好的变量与dist拼接 这里需要写上绝对路径,我们应该获取动态的绝对路径*/
		filename: 'bundle.js'/* 文件名称 */
	}
}