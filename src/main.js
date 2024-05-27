import './assets/main.css'

import { createApp } from 'vue'
// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from './App.vue'
// import FoodItem from './components/FoodItem.vue'
import  router  from './router/index'




// Create router instance
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });


const app = createApp(App)
// app.component('food-item', FoodItem)

// Use router
app.use(router)
app.mount('#app')
