<template>
       
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/contact">联系</router-link>
      <router-link to="/news">新闻</router-link>


      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {msg: 'vue模板页'}
        }
    }
</script>

<style>

</style>
