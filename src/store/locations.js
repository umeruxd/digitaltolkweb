import ApiServices from '@/services';
import {
	CHECK_IN,
	DELETE_CHECKIN,
	GET_LOCATION,
	GET_LOCATIONS,
	STORE_LOCATION,
} from './actions.types';
import {
	SET_LOCATION,
	SET_LOCATIONS,
	SET_LOCATION_FROM_STORAGE,
} from './mutations.types';
const locationModule = {
	namespaced: false,
	state: () => ({
		locations: [],
		currentLocation: {
			address: '',
			latitude: '',
			longitude: '',
		},
	}),

	getters: {
		locations: (state) => state.locations,
		currentLocation: (state) => state.currentLocation,
	},

	actions: {
		[GET_LOCATION]({ commit }) {
			let currentLocationInStorage = localStorage.getItem('location');
			if (!currentLocationInStorage) {
				fetch('https://ipinfo.io/json?token=ab482e4afeb953')
					.then((res) => res.json())
					.then((response) => {
						commit(SET_LOCATION, response);
					});
			} else {
				commit(SET_LOCATION_FROM_STORAGE, JSON.parse(currentLocationInStorage));
			}
		},
		[CHECK_IN]({ commit, getters, dispatch }, location) {
			return ApiServices.post('checkins', getters.currentLocation).then(
				(response) => {
					dispatch(GET_LOCATIONS);
					return response.data;
				}
			);
		},
		[GET_LOCATIONS]({ commit }) {
			return ApiServices.get('checkins').then((response) => {
				commit(SET_LOCATIONS, response.data.checkins);
				return response.data.checkins;
			});
		},
		[DELETE_CHECKIN]({ dispatch }, payload) {
			return ApiServices.delete(`checkins/${payload}`).then((response) => {
				dispatch(GET_LOCATIONS);
				return true;
			});
		},
	},

	mutations: {
		[SET_LOCATION](state, location) {
			let currentLocation = {
				address: `${location.city} ${location.region}, ${location.country} ${location.postal}`,
				latitude: location.loc.split(',')[0],
				longitude: location.loc.split(',')[1],
			};
			state.currentLocation = currentLocation;
			localStorage.setItem('location', JSON.stringify(currentLocation));
		},
		[STORE_LOCATION](state, location) {
			state.locations.unshift(state.currentLocation);
		},
		[SET_LOCATION_FROM_STORAGE](state, location) {
			state.currentLocation = location;
		},
		[SET_LOCATIONS](state, locations) {
			state.locations = locations.reverse();
		},
	},
};
export default locationModule;
