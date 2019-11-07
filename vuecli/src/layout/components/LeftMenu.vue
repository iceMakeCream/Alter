<template>
  <el-aside width="210px">
    <el-menu router :default-openeds="[menu[0].id]" unique-opened>
      <el-submenu v-for="item in menu" index="item.id" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>新闻</span>
        </template>
        <el-menu-item v-for="sub in item.children" :index="sub.path">
          {{sub.name}}
        </el-menu-item>
        <!--<el-menu-item index="/home">人员列表</el-menu-item>-->
        <!--<el-menu-item index="/about">部门列表</el-menu-item>-->
      </el-submenu>
      <el-submenu index="2">
      <template slot="title">
      <i class="el-icon-platform-eleme"></i>
      <span>表单</span>
      </template>
        <el-menu-item index="/TableForm">表单详情</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    data() {
      return {
        menu:[
          {
            name:'新闻',
            id:'news',
            icon:'el-icon-goods',
            children:[
              {
                name:'新闻列表',
                path:'/news'
              },{
                name:'人员列表',
                path:'/home'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>

</style>
