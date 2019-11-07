<template>
  <div id="app">
    {{msg}}
    <!--子组件标签绑定事件  @自定义事件名="事件处理函数"-->
    <!--事件的处理函数（showMmg）定义在父组件，谁用谁定义-->
    <!--事件的触发由子组件负责HellWorld（sendMsg）-->
    <HelloWorld @sendMsg="showMsg" message="Vue真不好" :age="19"></HelloWorld>
    <!--ref用来定义标签的唯一标识，相当于id-->
    <HelloWorld ref="helloworld" :message="helloMsg"></HelloWorld>
    <hello-world message="使劲学吧"></hello-world>
    <Button message="提交"></Button>
    <info-table :headinfo="tableH" :info="tableB"></info-table>
  </div>
</template>

<script>
  //引入组件
  import HelloWorld from './components/HelloWorld';
  import Button from './components/Button.vue';
  import infoTable from './components/infoTable.vue';

  export default {
    data(){
      return {
        msg:'父组件',
        helloMsg:1,
        tableH:{sex:'性别',age:'年龄',name:'姓名'},
        tableB:[{"sex":"Male","age":30,"name":"Jack"},{"sex":"Male","age":26,"name":"Bill"},{"sex":"Female","age":22,"name":"Tracy"},{"sex":"Male","age":36,"name":"Chris"}]
      }
    },
    //映射组件标签
    components:{
      HelloWorld,
      Button,
      infoTable
    },
    methods:{
      showMsg(value){
        alert('我从子组件接收了数据：'+value);
      }
    },
    mounted(){
//		  Vue实例中会有一个$refs的属性
//    $on方法的作用：绑定事件监听====@sendMsg=""
      this.$refs.helloworld.$on("sendMsg",value=>{
        alert(`我也接收了孩子的数据${value}`);
      })
    }
  }
</script>

<style>

</style>
