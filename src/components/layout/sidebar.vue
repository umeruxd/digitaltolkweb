<script setup>
import sidebarLinks from './sidebar-items';
import { LOGOUT } from '@/store/actions.types';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logout from '@/components/icons/Logout.vue';
import closeIcon from '@/assets/images/close.svg';
import barsIcon from '@/assets/images/bars.svg';
import { ref } from '@vue/reactivity';
const store = useStore();
const router = useRouter();
const showNav = ref(false);
const logoutHandler = () => {
	store.dispatch(LOGOUT).then((response) => {
		if (response) {
			router.push('/');
		}
	});
};
const swipeSideBar = () => {
	showNav.value = !showNav.value;
};
</script>

<template>
	<div
		id="sidebar"
		class="sidebar vh-100 d-flex flex-column justify-content-between"
		:class="{ 'show-nav': showNav }"
	>
		<div class="toggle-mobile-nav" @click="swipeSideBar">
			<img width="26" :src="showNav ? closeIcon : barsIcon" alt="" />
		</div>
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
					<Logout class="logout-icon" />
					<span class="logout-title ms-3">Logout</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<style>
.logout-icon .st0 {
	fill: none;
	stroke: #000000;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
}
</style>
