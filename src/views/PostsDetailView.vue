<template>
    <div class="posts">
    <h1>This is a post with id {{ $route.params.id }}</h1>
    <button @click="showPostId">Show Post Id</button>
    <button @click="goHomeIn3Seconds">Go home in 3 seconds</button>
    <button @click="goToId">Go to page with id 3</button>
    <!-- <textarea v-autofocus></textarea> -->
    <RouterLink to="/posts">&lt;Back</RouterLink>


    </div>
</template>

<script setup>
    import {useRoute, useRouter} from 'vue-router'

    const route = useRoute()
    const router = useRouter()

    const showPostId = () =>  {
        alert(`This post has an id of ${ route.params.id }`)
    }

    const goHomeIn3Seconds = () => {
        setTimeout(() => {
         router.push('/')
        }, 2500);
    }

    const goToId = () => {
        router.push({
            name: 'postDetail',
            params: {
                id: 'id3'
            }
        })
    }
</script>