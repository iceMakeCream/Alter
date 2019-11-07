<template>
  <div>
    Search<input type="text" v-model="searchQuery">
    <table>
      <tr>
        <th v-for="(h,hidx) in headinfo">{{h}}</th>
      </tr>
      <tr v-for="(b,bidx) in filterData">
        <td v-for="(value,key) in b">
          <router-link to="personInfo">{{b[key]}}</router-link>
        </td>
        <!--<td>{{b.sex}}</td>-->
        <!--<td>{{b.age}}</td>-->
        <!--<td>{{b.name}}</td>-->
      </tr>
    </table>
  </div>     
</template>

<script>
    export default {
      props:{
        headinfo:Array,
        info:Array
      },
      data() {
        return{
          searchQuery:'',
          filterColumn:'name'
        }
      },
      computed:{
        filterData(){
          let {searchQuery,filterColumn}=this;
          let arr=[...this.info];//如果没查询，则把原数据呈现
          if(searchQuery){
            arr=this.info.filter(n=>n[filterColumn].toUpperCase().includes(searchQuery.toUpperCase()))
          }
          return arr;
        }
      }
    }
</script>

<style scoped>
  table,th,td{
    border: 1px solid #f60;
  }
  table{
    border-collapse: collapse;
    width: 300px;
  }
  th{
    background-color: #f60;
    color: white;
  }
</style>
