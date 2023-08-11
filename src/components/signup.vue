<template>
   <Header/>
    <img class="logo" src="../asset/resto-logo.avif" />
    <h1>sign-up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your Name">
        <input type="email" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">
        <button type="button" v-on:click="signUp">sign-up</button>
        <!--@click="signUp"-->
        <div>
            <router-link to='/login'>login</router-link>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
import Header from './header.vue'
export default {
    name: 'signup',
    components:{Header},
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            console.log("sign", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/users", { // its showing is api sai hmai yai result chaeyai
                name: this.name, email: this.email, password: this.password
            });
            console.log(result)
            if (result.status == 201) {


                localStorage.setItem("user-info", JSON.stringify(result.data))//to store data in local storage takai pta ho kn sa user login ho chukah 
                this.$router.push({ name: 'homepage' }) // we use this when user click on sign up it should rideract to home
            }
        }

    },
    mounted()
    {
      
        let user = localStorage.getItem("user-info");// for if we  sign in .cant go back until sign-out and vice versa

        if (user) {
            this.$router.push({ name: 'homepage' })
        }
    }
}

</script>