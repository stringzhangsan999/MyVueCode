import Vue from 'vue'
import App from './App'
import router from './router'//完整写法是'./router/index' 但是如果是指定文件夹它会默认自动去找index文件 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//挂载路由器
  render: h => h(App)
})
