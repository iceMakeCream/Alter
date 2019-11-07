NewsList.vue<template>
       
  <div>
    {{this.$route.params.id}}
    <button @click="goBack">返回</button>
    <button @click="goHome">首页</button>
  </div>
</template>

<script>
    export default {
      data() {
        return {msg: 'NewsDetail'}
      },
      mounted(){

      },
      methods:{
        goBack(){
          this.$router.back();
        },
        goHome(){
          this.$router.push('/home');
          //this.$router.replace('/home');
        }
      }
    }
</script>

<style>

</style>
