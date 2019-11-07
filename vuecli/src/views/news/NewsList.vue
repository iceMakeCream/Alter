<template>
   
  <div>
    {{msg}}<el-button type="success">成功按钮</el-button>

    <el-table :data="news">
      <el-table-column prop="id" label="主键"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
    </el-table>
    <ul>
      <li v-for="(n,idx) in news" :key="idx">
        <router-link :to="`/news/${n.id}`">{{n.id}}</router-link>
        --
        {{n.title}}
        <router-link to="/news/edit">编辑</router-link>
        <el-button type="success">成功按钮</el-button>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'NewsList',
        news:[
          {id:1,title:"新闻1"},
          {id:2,title:"新闻2"},
          {id:3,title:"新闻3"},
          {id:4,title:"新闻4"},
        ]
      }
    }
  }
</script>

<style>

</style>
