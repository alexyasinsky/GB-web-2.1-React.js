import {API_ENDPOINT} from "../endpoints";

export const makeRequest = (url) => fetch(
	[
		API_ENDPOINT,
		url,
	].join(''))
	.then(response => response.json());
