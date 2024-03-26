<template>

<ul>
    <li v-for="name in user" :key="name">
        {{ name.mail }}
    </li>
</ul>


</template>

<script>
export default {
    name: "HomeComponent",
    data() {
        return {
            technology:["java","python","sql"],
            user:[
                {
                    name:"asil ganesh",
                    mail:"ganesh@gmail.com"
                },
                {
                    name:"veda",
                    mail:"veda@gmail.com"
                },
                {
                    name:"sainath",
                    mail:"sainath@gmail.com"
                }
            ]

        }
    }


} 
</script>

<style scoped>
h1 {
    color: orange
}
</style>