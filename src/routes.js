import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import Login from '@/pages/login.vue';
import Tasks from '@/pages/tasks.vue';
import Locations from '@/pages/locations.vue';
import { GET_TOKEN } from './store/actions.types';

const routes = [
	{ path: '/', component: Login },
	{ path: '/tasks', component: Tasks },
	{ path: '/locations', component: Locations },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
	store.dispatch(GET_TOKEN, null, { root: true });
	if (to.fullPath !== '/') {
		if (!store.state.auth.accessToken) {
			next('/');
			return;
		}
	}
	if (to.fullPath === '/') {
		if (store.state.auth.accessToken) {
			next('/tasks');
			return;
		}
	}
	next();
});

export default router;
