<script setup>
import Sidebar from './sidebar.vue';
</script>

<template>
	<div class="app-wrapper d-flex">
		<Sidebar />
		<div class="container-fluid main min-vh-100">
			<router-view></router-view>
		</div>
	</div>
</template>
