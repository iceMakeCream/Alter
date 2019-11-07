<template>
  <el-container direction="vertical">
    <layout-header></layout-header>
    <el-container>
      <left-menu></left-menu>
      <layout-main></layout-main>
    </el-container>
  </el-container>
</template>

<script>
  import LayoutHeader from './components/LayoutHeader.vue'
  import LeftMenu from './components/LeftMenu.vue'
  import LayoutMain from './components/LayoutMain.vue'

  export default {
    data() {
      return {msg: 'vue模板页'}
    },
    components:{
      LayoutHeader,
      LeftMenu,
      LayoutMain
    }
  }
</script>

<style>

</style>
