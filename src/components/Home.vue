<template>

<h1>Email: {{ getData().email }}</h1>
<h1>name: {{ getName() }}</h1>
<h1>Name : {{ getData().lastname }}</h1>
</template>

<script>

export default {
    name:"HomeComponent",
   data(){
    return{
        email:"ganesh@gmail.com",
      
    }
   },
   methods:{
    getName:function(){
        return "Ganesh asil"
    },
    getData:function(){
        return{
            fname:"Ganesh",
            lastname:"Asil",
            email:this.email
        }
    }
   }
}
</script>

<style scoped>
h1{
    color:red
}

</style>