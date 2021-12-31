<script setup>
import sidebarLinks from './sidebar-items';
import { LOGOUT } from '@/store/actions.types';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logout from '@/components/icons/Logout.vue';
const store = useStore();
const router = useRouter();
const logoutHandler = () => {
	store.dispatch(LOGOUT).then((response) => {
		if (response) {
			router.push('/');
		}
	});
};
</script>

<template>
	<div class="sidebar vh-100 d-flex flex-column justify-content-between">
		<ul class="navigation">
			<li v-for="link of sidebarLinks" :key="link.id">
				<router-link :to="link.slug">
					<span class="sidebar-icon" v-html="link.icon()"></span>
					<span class="sidebar-title">{{ link.title }}</span>
				</router-link>
			</li>
		</ul>
		<ul>
			<li>
				<a href="" @click.prevent="logoutHandler">
					<Logout class="logout-icon me-3" />
					<span class="logout-title">Logout</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<style type="text/css">
.st0 {
	fill: none;
	stroke: #000000;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
}
</style>
