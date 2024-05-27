
<template>
  <header>
    <!-- <food-item/> -->
    <!-- <div class="user-data">
      {{ userData.name }} @{{ userData.username }}
    </div> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/modal">Modals</RouterLink>
      
      <RouterLink to="/posts">Posts</RouterLink>
    </nav>
    <RouterView />
  </header>

  <main>
  </main>
</template>

<style>
/* import '../src/assets/base.css'; */

</style>

<script setup>
import {reactive,provide} from 'vue'

const userData = reactive({
  name: 'Mwebe',
  username: 'RayMwebe'
})

provide('userData', userData)
// import { RouterLink, RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue';
// import FoodItem from './components/FoodItem.vue';
</script>

<style scoped>
  .user-data{
    position: absolute;
    background: beige;
    top:0;
    right: 0;
    font-size: 12px;
    padding: 5px;
  }
</style>
