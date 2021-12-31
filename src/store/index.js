import Vuex from 'vuex';
import tasks from '@/store/tasks.js';
import locations from '@/store/locations.js';
import auth from '@/store/auth.js';
import general from '@/store/general.js';

export default Vuex.createStore({
	modules: {
		auth,
		general,
		tasks,
		locations,
	},
});
