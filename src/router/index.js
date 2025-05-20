import { createRouter, createWebHistory } from 'vue-router';

// views
const HelloWorld = () => import('@/views/HelloWorld.vue');

// routes
const routes = [
	{
		path: '/',
		name: 'Home',
		component: HelloWorld,
	},
];

// router
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
