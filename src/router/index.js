import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsDetailView from '../views/PostsDetailView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostsView from '../views/PostsView.vue'

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/posts',
                name: 'posts',
                component: PostsView
            },
            {
                path: '/postDetail/:id',
                name: 'postDetail',
                component: PostsDetailView
            },  
            {
                path: '/modal',
                name: 'modal',
                component: ModalsView
            }
        ]
    })

    // Create router instance
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

    export default router;

