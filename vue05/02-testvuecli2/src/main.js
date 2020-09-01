import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)//ES6箭头函数
})

// new Vue({
//   el: '#app',
//   render:function (createElement){
// 		return  createElement('div', {class:'box'} , ["Hello Cli2"])
// 	}
// })

