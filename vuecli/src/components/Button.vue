<template>
	<button>{{message}}</button>
</template>

<script>
	export default {
//    props:['message'],
	  props:{
	    message:String
    },
		data(){
			return{
				msg:'提交'
			}
		}
	}
</script>

<style>
  button{
    color: red;
  }
</style>
