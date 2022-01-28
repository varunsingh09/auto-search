/* eslint-disable import/no-anonymous-default-export */
import {
	PENDING_DATA_FROM_GOOGLE, SUCCESS_DATA_FROM_GOOGLE, ERROR_DATA_FROM_GOOGLE
} from "./../actions/types";


const initialState = {
	response: [],

};
export default function (state = initialState, action) {
	switch (action.type) {

		case ERROR_DATA_FROM_GOOGLE:
			return {
				...state,
				error: action.error,
				pending: false,
			}
		case SUCCESS_DATA_FROM_GOOGLE:
			return {
				...state,
				data: action && action.payload && action.payload.data &&  action.payload.data.data  ? action.payload.data.data : [],
				pending_emp: false,
			}
		case PENDING_DATA_FROM_GOOGLE:
			return {
				...state,
				response: true,
			}
		default:
			return state
	}
}