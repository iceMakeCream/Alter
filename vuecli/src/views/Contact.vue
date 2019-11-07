<template>
       
    <div>
      {{msg}}
      <info-table :headinfo="tableH" :info="tableB"></info-table>
    </div>
</template>

<script>
    import infoTable from '../components/infoTable.vue';
    import axios from 'axios';
    import Mock from 'mockjs';

    export default {
      data(){
        return {
          msg:'contact',
          tableB:[],
          tableH:{sex:'性别',age:'年龄',name:'姓名'},
//          tableB:[{"sex":"Male","age":30,"name":"Jack"},{"sex":"Male","age":26,"name":"Bill"},{"sex":"Female","age":22,"name":"Tracy"},{"sex":"Male","age":36,"name":"Chris"}]
        }
      },
      //映射组件标签
      components:{
        infoTable
      },
      mounted(){
        let data=Mock.mock({
          "data|10-15":[
            {
              "sex|1":["Male","Female"],
              "age": '@integer(18, 28)',
              "name": '@cname'
            }
          ]
        });
        this.tableB=data.data;
      }
    }
</script>

<style>

</style>
