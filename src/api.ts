import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'http://localhost:4000';

/*
Define get request.
 */
export const onGet = <T>(path: string): AxiosPromise<T> => {
	const url = [BASE_URL, path].join('/');
	return axios.get(url);
}


