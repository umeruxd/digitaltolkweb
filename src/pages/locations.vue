<script setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { GET_LOCATIONS, CHECK_IN, SHOW_TOAST } from '@/store/actions.types';
import LocationCard from '@/components/locations/locationCard.vue';
import TimeIcon from '@/assets/images/marker.svg';

const store = useStore();
const currentLocation = computed(() => store.getters.currentLocation);
const locations = computed(() => store.getters.locations);

onMounted(() => {
	store.dispatch(GET_LOCATIONS);
});
const checkin = () => {
	store.dispatch(CHECK_IN).then((response) => {
		store.dispatch(SHOW_TOAST, {
			duration: 5,
			toastHeading: 'Checked in successfully',
			toastCopy: `From ${currentLocation.value.address}`,
			icon: TimeIcon,
		});
	});
};
</script>

<template>
	<div class="locations">
		<div class="check-in">
			<a href="" @click.prevent="checkin" class="fw-bold text-gray fz-18">
				+ Check in
			</a>
		</div>
		<div class="current-location">
			<p class="fw-bold text-gray fz-18 mb-3">Current Location</p>
			<LocationCard :location="currentLocation" />
		</div>
		<div class="previous-location">
			<p class="fw-bold text-gray fz-18 mb-3">Previous Location</p>
			<div v-for="location of locations" :key="location.id">
				<LocationCard :location="location" />
			</div>
		</div>
	</div>
</template>
