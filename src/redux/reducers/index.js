import { combineReducers } from "redux";
import googleReducer from "./googleReducer";



export default combineReducers({
	googleData: googleReducer,
})