<template>
  <div>
    <h2>我是首页</h2>
    <h3>我是首页内容，哈哈哈哈</h3>
    <router-link to="/Home/News">新闻</router-link>
     <router-link to="/Home/Message">消息</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
  //将这个vue组件导出
  export default {
    name: 'home'
  }
</script>

<style>
</style>
