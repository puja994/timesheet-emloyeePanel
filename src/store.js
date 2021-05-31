import { configureStore } from "@reduxjs/toolkit";

import shiftsReducer from "./pages/calenderSlice"
import loginReducer from './pages/login/loginSlice'


const store = configureStore({
	reducer: {
		
		shifts: shiftsReducer,
		login: loginReducer,
	
	},
});

export default store;