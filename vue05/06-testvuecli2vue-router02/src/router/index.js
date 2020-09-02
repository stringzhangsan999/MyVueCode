import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

/*
 1.导入vue-router和vue
 2.Vue.use(Router)安装插件实例
 3.配置Router 配置里面routes 路由数组
 4.导出路由配置
 */

//当安装一个插件以后需要以Vue.use(插件实例)
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Home' //redirect重定向
  },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/User/:Id',//:XXX相当于是占位符的写法了后面xxx是什么无所谓
      component: User
    }
]
export default new Router({
     routes,//ES对象简化写法默认routes字符串做key routes做值
     mode: 'history' ,//默认是hash模式所以会出现#我们将模式修改为history就不会出现这样的问题
     linkActiveClass: 'active',//修改所有router-link中class的名称
})
