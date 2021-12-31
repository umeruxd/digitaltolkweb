<script>
import { defineComponent, toRefs } from 'vue';
import { DELETE_CHECKIN } from '@/store/actions.types';
import Delete from '../icons/delete.vue';

export default defineComponent({
	props: {
		location: {
			type: Object,
			required: true,
		},
	},
	computed: {
		limit() {
			return {
				lat: +this.location.latitude,
				long: +this.location.longitude,
			};
		},
		mapUrl() {
			return `https://www.google.com/maps/search/?api=1&query=${this.limit.lat},${this.limit.long}`;
		},
	},
	setup(props) {
		const { location } = toRefs(props);
		return {
			location,
		};
	},
	components: { Delete },
	methods: {
		deleteCheckin() {
			this.$store.dispatch(DELETE_CHECKIN, this.location.id);
		},
	},
});
</script>

<template>
	<div class="location-card fz-18 mb-3">
		<div class="location-address d-flex align-items-start">
			<img class="location-icon" src="@/assets/images/dropped.png" alt="" />
			<div>
				<div class="text-gray ms-3">{{ location.address }}</div>
				<div class="text-gray lat-long ms-3 d-flex align-items-center">
					<a :href="mapUrl" target="_blank">
						{{ limit.lat.toFixed(4) }}, {{ limit.long.toFixed(4) }}
					</a>
					<Delete @click="deleteCheckin" class="action-delete ms-1" />
				</div>
			</div>
		</div>
	</div>
</template>
