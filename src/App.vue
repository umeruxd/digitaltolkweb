<script setup>
import Layout from '@/components/layout/index.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { GET_LOCATION } from '@/store/actions.types';
import Toast from '@/components/general/toast.vue';
const store = useStore();
const isAuth = computed(() => store.getters.isAuthenticated);
store.dispatch(GET_LOCATION);
</script>

<template>
	<div class="app-container flex items-center min-h-screen">
		<Toast />
		<Layout v-if="isAuth" />
		<router-view v-else />
	</div>
</template>
