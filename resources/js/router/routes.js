import { createRouter, createWebHistory } from 'vue-router';

let routes = [];

routes = [
    {
        path: '/',
        component: () => import('../Components/Frontend/Index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;