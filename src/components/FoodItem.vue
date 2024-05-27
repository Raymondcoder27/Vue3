<template>
    <button @click="increament(2)">+</button>
    <h2>{{ counterData.count }}</h2>
    <button @click="decreament(3)">-</button>
    <h3>This counter is {{ oddOrEven }}</h3>
    <h2 class="edit">{{ counterData.title }}</h2>
    <input type="text" v-model="counterData.title" v-autofocus>
</template>

<script setup>
import {
    ref, reactive, computed, watch, onMounted
} from 'vue'
import { vAutofocus } from '../directives/vAutofocus'

const count = ref(0)
const counterTitle = ref('My Counter')

const counterData = reactive({
    count: 0,
    title: 'My Counter'
})

onMounted(()=>{
    console.log('do stuff related to title')
})

watch(() => counterData.count, (newCount) => {
    if (newCount == 15)
        alert('Wait to go, you counted till 15!')
})

const oddOrEven = computed(() => {
    if (counterData.count % 2 == 0) return 'even'
    return 'odd'
})
// function edit(){
//     counterTitle = 'My Counter'
// }

const increament = amount => {
    counterData.count += amount
}

const decreament = amount => {
    counterData.count -= amount
}

// function increament(){
//     counterData.count++
// }
// function decreament(){
//     counterData.count--
// }

// function increament(){
//     count.value++
// }

// function decreament(){
//     count.value--
// }
onMounted(()=>{
    console.log('Do stuff related to counter')
})



</script>


<style scoped>
.edit {
    margin-top: 30px;
}
</style>
