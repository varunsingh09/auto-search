import {
	PENDING_DATA_FROM_GOOGLE, SUCCESS_DATA_FROM_GOOGLE, ERROR_DATA_FROM_GOOGLE
} from "./types";
import axios from "axios";
import * as Api from "./../../api/";
const CONTENT_TYPE_DEFAULT = {
	'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description, x-requested-with, x-requested-by',
	"accept": "application/json",
	"Access-Control-Allow-Origin": "*"
};
export function getAutoPopulateData(data) {

	return async (dispatch) => {
		dispatch({
			type: PENDING_DATA_FROM_GOOGLE,
		});
		await axios.get(Api.GET_LOOKUP_DATA, { header: CONTENT_TYPE_DEFAULT })
			.then((response) => {
				dispatch({
					type: SUCCESS_DATA_FROM_GOOGLE,
					payload: response,
				});
			}).catch(err => {
				dispatch({
					type: ERROR_DATA_FROM_GOOGLE,
					error: err && err.response && err.response.data && err.response.data.error,
				});
			});
	}
}
