<template>
    
    <h2 v-if="show">If condition</h2>
    <h2 v-else>Else condition</h2>
    <br>
    <br>
    <button v-on:click="show=!show">show</button>
    
</template>

<script>
export default {
    name:"HomeComponent",
    data(){
        return{
         show:true
           
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