<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="add">Add Restaurant</router-link>
   
   
<a v-on:click="logout" href="#">Logout</a>
    <!--@click="logout"-->
</div>

</template>
<script>
export default {
    name:"header",
    methods:{
        logout(){
            console.log("logout")
            localStorage.clear();
            this.$router.push({name:'login'}) // to clear data 
        }
    }
}
</script>