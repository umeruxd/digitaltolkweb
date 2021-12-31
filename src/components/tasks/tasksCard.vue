<script>
import { defineComponent, toRefs } from 'vue';
import editIcon from '@/assets/images/edit.svg';
import clockIcon from '@/assets/images/clock.png';
import moment from 'moment';
import { UPDATE_TASK, DELETE_TASK } from '@/store/actions.types';
import CheckIcon from '@/components/icons/check.vue';
import Delete from '../icons/delete.vue';
export default defineComponent({
	data: () => ({
		editIcon,
		clockIcon,
	}),
	created: function () {
		this.moment = moment;
	},
	props: {
		task: {
			type: Object,
			required: true,
		},
	},
	computed: {
		formattedDate() {
			return this.moment(this.task.due_at).calendar(null, {
				sameDay: '[Today]',
				nextDay: '[Tomorrow]',
				nextWeek: 'dddd',
				lastDay: '[Yesterday]',
				lastWeek: '[Last] dddd',
				sameElse: 'DD MMM, HH:mm',
			});
		},
	},
	setup(props) {
		const { task } = toRefs(props);
		let todaysDate = new Date('Dec 3 2021 10:16:19 GMT-0800');
		return {
			task,
			todaysDate,
		};
	},
	methods: {
		handleChangeStatus() {
			let taskCopy = {
				...this.task,
				status: this.task.status == 'incomplete' ? 'inprogress' : 'incomplete',
			};
			this.$store.dispatch(UPDATE_TASK, taskCopy).then(() => {
				this.$emit('request', taskCopy.status);
			});
		},
		handleTaskDone() {
			this.$emit('handleTaskDone', this.task);
			let taskCopy = { ...this.task, status: 'completed' };
			this.$store.dispatch(UPDATE_TASK, taskCopy).then(() => {
				this.$emit('request', taskCopy.status);
			});
		},
		handleTaskDelete() {
			this.$emit('handleTaskDelete', this.task);
			this.$store.dispatch(DELETE_TASK, this.task.id).then(() => {
				this.$emit('request', 'deleteTask');
			});
		},
		handleTaskEdit() {
			this.$emit('edit', this.task);
		},
	},
	components: { CheckIcon, Delete },
});
</script>

<template>
	<div class="task-card fz-18 mb-3" ref="mode">
		<div class="checkbox">
			<div class="form-check">
				<input
					class="form-check-input"
					@change.prevent="handleChangeStatus"
					type="checkbox"
					value=""
					:id="`tasks-${task.id}`"
					:disabled="task.status === 'completed'"
					:checked="task.status !== 'incomplete'"
					:name="`tasks-${task.id}`"
				/>
				<label
					class="form-check-label fw-500 text-gray"
					:for="`tasks-${task.id}`"
				>
					{{ task.description }}
				</label>
				<div class="d-flex align-items-center text-light-gray-1 mt-1">
					<img width="16" class="me-1" :src="clockIcon" alt="" />
					<span class="fz-14 fw-600">{{ formattedDate }}</span>
					<div class="edit ms-2 cursor-pointer" @click.prevent="handleTaskEdit">
						<img :src="editIcon" width="14" alt="" />
					</div>
					<div
						class="task-delete ms-2 cursor-pointer text-danger"
						@click.prevent="handleTaskDelete"
					>
						<Delete />
					</div>
					<div
						v-if="task.status === 'inprogress'"
						class="task-done ms-2 cursor-pointer"
						@click.prevent="handleTaskDone"
					>
						<CheckIcon /> Done
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
