import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//路由懒加载的写法
const Home = () =>import('../components/Home.vue');
const About = () =>import('../components/About.vue');
const User = () =>import('../components/User.vue')
const News = () =>import('../components/News.vue')
const Message = () =>import('../components/Message.vue')
/*
 1.导入vue-router和vue
 2.Vue.use(Router)安装插件实例
 3.配置Router 配置里面routes 路由数组
 4.导出路由配置
 */

//当安装一个插件以后需要以Vue.use(插件实例)
Vue.use(Router)

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {  //解决浏览器报错Error: Avoided redundant navigation to current location: “/home/news“.
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
      path: '/',
      redirect: '/Home' //redirect重定向
    },
    {
      path: '/Home',
      component: Home,
      meta:{
        title: "首页"
      },
      children:[
        {
        path: 'News' ,//可以不用加/
        component: News,
        meta:{
          title: "新闻"
        }
      },
      {
      path: 'Message' ,//可以不用加/
      component: Message,
      meta:{
        title: "消息"
      }
      },
      {
        path: '/' ,
        redirect :'News'

      }
      ]
    },
    {
      path: '/About',
      component: About,
      meta:{
        title: "关于"
      },
    },
    {
      path: '/User/:Id',//:XXX相当于是占位符的写法了后面xxx是什么无所谓
      component: User,
      meta:{
        title: "我的"
      },
    }
]
const router =  new Router({
     routes,//ES对象简化写法默认routes字符串做key routes做值
     mode: 'history' ,//默认是hash模式所以会出现#我们将模式修改为history就不会出现这样的问题
     linkActiveClass: 'active',//修改所有router-link中class的名称
})
router.beforeEach((to,from,next)=>{//next()方法必须执行不然无法正常显示
window.document.title=to.meta.title
next()

})

export default router
