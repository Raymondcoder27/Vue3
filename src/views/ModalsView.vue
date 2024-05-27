<template>
    <h1>Modals</h1>
    <div>
        <label for="modals">Show dark modal?</label>
        <input 
        v-model="showDarkModals"
        type="checkbox">
    </div>
    <pre>{{ showDarkModals }}</pre>
    <button @click="showModal = true">Show Modal</button>
    <component 
    :is="showDarkModals ? DarkModal : Modal" 
    v-model="showModal" 
    title="My modal view (via Prop)">
        <template v-slot:title>My new title</template>
        Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
        Velit saepe dolore qui eaque.
        Error animi exercitationem magnam aspernatur
        omnis minima doloribus neque, laborum eum nam,
        facere qui earum? Officia, nisi?<br><br>
    </component>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import DarkModal from '../components/DarkModal.vue'

const props = defineProps({
    // userData: {
    //     type: Object
    // }
})

const showModal = ref(false)
const showDarkModals = ref(false)
</script>

