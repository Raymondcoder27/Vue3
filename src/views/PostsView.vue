<template>
    <div class="posts">
        <h1>Posts</h1>
        <!-- <textarea v-autofocus></textarea> -->
        <ul>
            <li 
            v-for="post in posts"
            :key="post.id">
                <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
            </li>
            <!-- <li>
                <RouterLink to="/postDetail/id2">Post 2</RouterLink>
            </li>
            <li>
                <RouterLink to="/postDetail/id3">Post 3</RouterLink>

            </li> -->
        </ul>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutofocus } from '../directives/vAutofocus'

    const posts = ref([
        {
            id: 'id1',
            title: 'Post 1'
        },
        {
            id: 'id2',
            title: 'Post 2'
        },
        {
            id: 'id3',
            title: 'Post 3'
        }
    ])
</script>