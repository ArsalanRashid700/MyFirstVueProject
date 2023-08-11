<template>
   <Header/>
    <img class="logo" src="../asset/resto-logo.avif" />
    <h1>Login</h1>
    <div class="login">

        <input type="email" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">
        <button type="button" v-on:click="login">login</button>
        <!--@click="login"-->
        <p>
            <router-link to='/signup'>signup</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
import Header from './header.vue'
export default {
    name:'login',
    components:{Header},
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods: {
        async login() {
           
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&pasword=${this.password}`);// to make dynamic we use literal ``
            console.log(result)
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({ name: 'homepage' }) // we use this when user click on sign up it should rideract to home
            }
        }
    },

      mounted() {
        let user=localStorage.getItem("user-info");// for if we  sign in .cant go back until sign-out
        if(user){
            this.$router.push({name:'homepage'})
        }
      }
    }



</script>