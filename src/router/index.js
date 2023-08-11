import { createRouter, createWebHashHistory } from 'vue-router'
import SignUp from '../components/signup.vue';
import HomePage from '../components/homePage.vue';
import Login from '../components/login.vue';
import Add from '../components/add.vue';
import Update from '../components/update.vue';



const routes = [
    {path:'/signup',component:SignUp,name:'signup'},
    {path:'/',component:HomePage, name:'homepage'},
    {path:'/login',component:Login, name:'login'},
    {path:'/add',component:Add, name:'add'},
    {path:'/update/:id',component:Update, name:'update'}, // to get dynamic data when updating
]

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    
    });
    export default router
    
    