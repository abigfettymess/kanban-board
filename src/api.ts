import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'http://localhost:3001';

/*
Define get request.
 */
export const onGet = <T>(path: string): AxiosPromise<T> => {
	const url = [BASE_URL, path].join('/');
	return axios.get(url);
}

export const onPost = <T>(path: string, data: any): AxiosPromise<T> => {
	const url = [BASE_URL, path].join('/');
	return axios.post(url, data);
}

export const onPut = <T>(path: string, data: any): AxiosPromise<T> => {
	const url = [BASE_URL, path].join('/');
	return axios.put(url, data);
};
