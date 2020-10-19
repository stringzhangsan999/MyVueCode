<template>
  <div id="app">
    <h1>我是App组件</h1>
       <router-link to="/Home"  replace >首页</router-link>
       <router-link to="/About"  replace>关于</router-link>
   <router-link :to="{
         path: '/User/'+1123,
         query: {name: '张三' , age: 18}
         }">用户</router-link>    <!--  router-link方式实现 -->

       <!--  <button @click="toUser()">用户</button> -->   <!-- js实现 -->
     <keep-alive><!-- 保持组件状态避免重复创建 缓存包含include="组件名称,"   缓存排除 exclude="组件名称," 注意这里主键名称和你组件导出的名称匹配着 注意多个组件用逗号隔开但是逗号之间不要有空格-->
       <router-view></router-view><!-- router-view相当于是占位符一样的作用会将组件内容显示在这  -->
     </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    toUser(){
      this.$router.push({
        path: '/User/'+1123,
        query: {name: '张三', age: 18}
      })
    }
  }
}
</script>

<style>
    .active{
      color: #f00;
    }
</style>
