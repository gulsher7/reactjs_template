import axios from 'axios';

import store from '../redux/store';
import types from '../redux/types';

const { dispatch, getState } = store;

export async function getHeaders() {
	let userData = await localStorage.getItem('userData');
	if (userData) {
		userData = JSON.parse(userData);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${userData.accessToken}`,
		};
	}
	return {};
}


export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {

	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {

					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}
