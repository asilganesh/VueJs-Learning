<template>
    <input type="mail" placeholder="enter you email" v-model="email">
    <br>
    <br>
    <input type="password" placeholder="enter your password" v-model="password">
    <br>
    <br>
    <button  v-on:click="getData()" type="button">Get Values</button>
    
</template>

<script>
export default {
    name:"HomeComponent",
    data(){
        return{
            email:null,
            password:null
           
        }
    },
    methods:{
        getData:function(){
            console.log("values ",this.email,this.password)
        }
    }
 
} 
</script>

<style scoped>
h1{
    color:orange
}
</style>