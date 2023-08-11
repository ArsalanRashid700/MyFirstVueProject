<template>
    <Header/>
    <h1>Restaurants Details</h1> <!-- to see name of login person in front-->
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td><router-link :to="'/update/' + item.id">Update</router-link>
                <button type='button' v-on:click="DeleteRestaurant(item.id)">Delete</button> <!--to delete item-->
            </td> <!--to get dynamic data we use : nd item.id-->




        </tr>
    </table>
</template>
<script>

import axios from 'axios'
import Header from './header.vue'
export default {
    name: 'homepage',
    components:{Header},
    data() { // becus we wanna see which user is login .for that more in below mounted
        return {
            name:"",
            restaurants: []
        }
    },
    methods: {
        async DeleteRestaurant(id) { // to delete
            let result = await axios.delete("http://localhost:3000/restaurant/" + id);
            if (result.status == 200) {
                let user = localStorage.getItem("user-info");// for if we  sign in .cant go back until sign-out and vice versa
                this.name = JSON.parse(user).name //to get name of user in home page who is login
                if (!user) {// we did this becus when user is logout it should redirect to signup page
                    this.$router.push({ name: 'signup' })
                }
                let result = await axios.get('http://localhost:3000/restaurant')
                console.log(result)
                this.restaurants = result.data
            }

        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");// for if we  sign in .cant go back until sign-out and vice versa
        // this.name = JSON.parse(user).name //to get name of user in home page who is login
        if (!user) {// we did this becus when user is logout it should redirect to signup page
            this.$router.push({ name: 'signup' })
        }
        let result = await axios.get('http://localhost:3000/restaurant')
        console.log(result)
        this.restaurants = result.data
    }
}

</script>
<style>
td {
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    width: 300px;
    height: 40px;
    text-align: center;
    font-size: 20px;


}
</style>