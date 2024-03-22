<template>
    <h1 v-on:mousemove="move()">Home Component</h1>
    <button v-on:click="getData('button 1 clicked')">Click Me</button>
    <button v-on:dblclick="getData('button double  clicked')">Click me</button>
    <button v-on:click="increment()">click to Increment count {{ count }}</button>
    
</template>

<script>
export default {
    name:"HomeComponent",
    data(){
        return{
            count:0
        }
    },
    methods:{
        getData:function(data){
            alert(data)
        },
        move:function(){
            console.log("mouse moved")
        },
        increment:function(){
            this.count=this.count+1
        }
    }
 
}
</script>

<style scoped>
h1{
    color:orange
}
</style>