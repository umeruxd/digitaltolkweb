import {
	LOGIN,
	GET_TOKEN,
	SET_TOKEN,
	GET_LOCATION,
	LOGOUT,
} from './actions.types';
import { UPDATE_ACCESS_TOKEN } from './mutations.types';
const generalModule = {
	namespaced: false,
	state: () => ({
		accessToken: null,
		isAuthenticated: !!localStorage.getItem('accessToken'),
	}),

	getters: {
		isAuthenticated: (state) => state.isAuthenticated,
	},

	mutations: {
		[UPDATE_ACCESS_TOKEN]: (state, accessToken) => {
			if (accessToken) {
				state.accessToken = `Bearer ${accessToken}`;
				state.isAuthenticated = true;
			} else {
				state.accessToken = null;
				state.isAuthenticated = false;
			}
		},
	},

	actions: {
		[LOGIN]({ dispatch }, credentials) {
			return new Promise((res, rej) => {
				dispatch(SET_TOKEN, 'Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK');
				dispatch(GET_LOCATION);
				res(true);
			});
		},
		[LOGOUT]({ commit }, credentials) {
			return new Promise((res, rej) => {
				localStorage.removeItem('accessToken');
				localStorage.removeItem('location');
				commit(UPDATE_ACCESS_TOKEN, null);
				res(true);
			});
		},
		[GET_TOKEN]({ commit, dispatch }) {
			let token = localStorage.getItem('accessToken');
			if (token !== null) {
				commit(UPDATE_ACCESS_TOKEN, token);
			}
		},
		[SET_TOKEN]({ commit }, token) {
			if (token) {
				commit(
					'updateAccessToken',
					token || localStorage.getItem('accessToken')
				);
				localStorage.setItem('accessToken', token);
			}
		},
	},
};
export default generalModule;
