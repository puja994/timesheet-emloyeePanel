import { configureStore } from "@reduxjs/toolkit";

import shiftsReducer from "./pages/calenderSlice"
import loginReducer from './pages/login/loginSlice'
import profileReducer from './pages/profile/profileSlice'
import availabilityReducer from './pages/availability/availabilitySlice'


const store = configureStore({
	reducer: {
		
		shifts: shiftsReducer,
		login: loginReducer,
		profile: profileReducer,
		availability: availabilityReducer,
	
	},
});

export default store;