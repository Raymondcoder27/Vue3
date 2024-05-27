<template>
    <teleport to=".modal-container">
       <!-- <button
    @click="showModal = true">Show Modal</button> -->
    <div
    v-if="modelValue"
     class="modal">
     <h1>{{ title }}</h1>
     <h1><slot name="title" /></h1>
     <slot />
     <slot/>
     <!-- <h3>{{ userData.name }} @{{ userData.username }}</h3> -->
     <!-- <pre>{{ $slots.title() }}</pre> -->
     <div>Username is: {{ userData.username }}</div>
        <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
</teleport>
</template>

<script setup>
    // import { useSlots } from 'vue'
    import {inject } from 'vue'

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'no specified title'
        }
        // userData: {
        //     type: Object
        // }
    })

    const userData = inject('userData')

    //emits
    const emit = defineEmits(['update:modelValue'])

    //handle button click
    // const handleButtonClick = () => {
    //     emit('update:modelValue', false)
    // }

    // console.log(props.title)

    // const slots = useSlots()

    // console.log(slots.title())
</script>

<style scoped>
    .modal{
        background-color: beige;
        padding: 10px;
        position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>
