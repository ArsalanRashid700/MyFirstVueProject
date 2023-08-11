<template>
<Header/>
    <h1>Hello user,welcome to our updatePage</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model='restaurant.name' name="name" />
        <input type="text" placeholder="Enter  Address" v-model='restaurant.address' name="address" />
        <input type="text" placeholder="Enter Contact" v-model='restaurant.contact' name="contact" />
        <button type="button" @click="UpdateRestautant">Update New Restaurant</button>

    </form>
</template>


<script>
import Header from './header.vue'
import axios from 'axios'
export default {
    name: 'update',
    components:{Header},
    data() {
        return {
            restaurant:
            {
                name: "",
                address: "",
                contact: ""
            }

        }
    },
    methods: {
        async UpdateRestautant() {  /// we did this so when we update in can be seen on front end

            const result = await axios.put('http://localhost:3000/restaurant/' +this.$route.params.id, {  // put operation
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 200) {
                this.$router.push({ name: 'homepage' });
            }
        }    
    },
    async mounted() { // for prefill form
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "signup" })
        }
        const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id); // +this.$route.params.id for dynamic data(id)
        this.restaurant = result.data //to see data prefill

    }
    
}


</script>