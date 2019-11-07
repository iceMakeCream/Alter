<template>
    <div id="app">
      <layout></layout>
    </div>
</template>

<script>
    import Layout from './layout/index.vue'
    export default {
        data() {
            return {msg: 'vue模板页'}
        },
        components:{
          Layout
        }
    }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app,.el-container,.el-menu{
  height: 100%;
}
.el-table{
  height: 50% !important;
  width: 100% !important;
}
.el-container,.el-menu{
  min-height: 100%;
}
</style>
