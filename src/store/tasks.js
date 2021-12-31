import Vuex from 'vuex';
import ApiServices from '@/services';
import {
	GET_TASKS,
	CREATE_TASK,
	UPDATE_TASK,
	DELETE_TASK,
} from './actions.types';
import { SET_TASKS } from './mutations.types';
const tasksModule = {
	namespaced: false,
	state: () => ({
		tasks: [],
		completedTasks: [],
		incompleteTasks: [],
		inprogressTasks: [],
	}),

	getters: {
		tasks: (state) => state.tasks,
		completedTasks: (state) => state.completedTasks,
		incompleteTasks: (state) => state.incompleteTasks,
		inprogressTasks: (state) => state.inprogressTasks,
	},

	mutations: {
		[SET_TASKS](state, tasks) {
			state.tasks = tasks;
			state.completedTasks = tasks
				.filter((task) => task.status === 'completed')
				.reverse();
			state.incompleteTasks = tasks
				.filter((task) => task.status === 'incomplete')
				.reverse();
			state.inprogressTasks = tasks
				.filter((task) => task.status === 'inprogress')
				.reverse();
		},
	},

	actions: {
		[GET_TASKS]({ commit }) {
			return ApiServices.get('tasks').then((response) => {
				commit(SET_TASKS, response.data.tasks);
				return response.data.tasks;
			});
		},
		[CREATE_TASK]({ commit, dispatch }, payload) {
			return ApiServices.post('tasks', payload).then((response) => {
				dispatch(GET_TASKS);
			});
		},
		[UPDATE_TASK]({ commit, dispatch }, payload) {
			return ApiServices.put(`tasks/${payload.id}`, payload).then(
				(response) => {
					dispatch(GET_TASKS);
				}
			);
		},
		[DELETE_TASK]({ commit, dispatch }, payload) {
			return ApiServices.delete(`tasks/${payload}`).then((response) => {
				dispatch(GET_TASKS);
			});
		},
	},
};
export default tasksModule;
