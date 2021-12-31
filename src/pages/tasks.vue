<script setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { GET_TASKS, SHOW_TOAST } from '@/store/actions.types';
import LocationCard from '@/components/locations/locationCard.vue';
import TimeIcon from '@/assets/images/time.svg';
import TasksCard from '@/components/tasks/tasksCard.vue';
import AddTask from '../components/tasks/addTask.vue';

const store = useStore();
const tasks = computed(() => store.getters.tasks);
const editTasks = ref();
const completedTasks = computed(() => store.getters.completedTasks);
const incompleteTasks = computed(() => store.getters.incompleteTasks);
const inprogressTasks = computed(() => store.getters.inprogressTasks);

onMounted(() => {
	store.dispatch(GET_TASKS);
});

const handleEdit = (data) => {
	editTasks.value = data;
};
const handleCloseModal = (data) => {
	editTasks.value = {};
};
const handleRequestNotification = (type) => {
	console.log(type, 'type');
	let taskType = 'created';
	if (type === 'updateTask') taskType = 'updated';
	else if (type === 'deleteTask') taskType = 'deleted';
	else if (type === 'incomplete') taskType = 'moved to incomplete list';
	else if (type === 'completed') taskType = 'moved to completed list';
	else if (type === 'inprogress') taskType = 'moved to inprogress list';

	store.dispatch(SHOW_TOAST, {
		duration: 50,
		toastHeading: 'Tasks Status',
		toastCopy: `The task has been ${taskType} successfully`,
		icon: TimeIcon,
	});
};
</script>

<template>
	<div class="tasks">
		<AddTask
			:task="editTasks"
			@request="handleRequestNotification"
			@closeModal="handleCloseModal"
		/>
		<div class="row">
			<div class="col-lg-4">
				<h3 class="text-gray fz-18 fw-bold">Incomplete</h3>
				<div class="tasks-wrapper card p-4">
					<div
						v-for="task of incompleteTasks"
						:key="`tasks-${task.id}`"
						class="incomplete-tasks"
					>
						<TasksCard
							@request="handleRequestNotification"
							:task="task"
							@edit="handleEdit"
						/>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<h3 class="text-gray fz-18 fw-bold">Inprogress</h3>
				<div class="tasks-wrapper card p-4">
					<div
						v-for="task of inprogressTasks"
						:key="`tasks-${task.id}`"
						class="inprogress-tasks"
					>
						<TasksCard
							@request="handleRequestNotification"
							:task="task"
							@edit="handleEdit"
						/>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<h3 class="text-gray fz-18 fw-bold">Completed</h3>
				<div class="tasks-wrapper card p-4">
					<div
						v-for="task of completedTasks"
						:key="`tasks-${task.id}`"
						class="completed-tasks"
					>
						<TasksCard
							@request="handleRequestNotification"
							:task="task"
							@edit="handleEdit"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
