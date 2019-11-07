<template>
  <div id="app">
    <button @click="emitVueEvent">触发事件</button>
    {{message}}
  </div>
</template>

<script>
  export default {
    props:['message','fontColor'],
//    props:{
//      message:String,
//      age:{
//        type:Number,
//        required:true
//      }
//    },
    data(){
      return {
        msg:'helloworld'
      }
    },
    methods:{
      emitVueEvent(){
//      执行业务逻辑……

//      由子组件触发事件(事件名,data)
        this.$emit("sendMsg",this.msg);
      }
    }
  }
</script>

<style scoped>
  redFont{
    color: red;
  }
</style>
