import {attempt} from "../lib/attempt";
import {endpoints} from "../endpoints";

export const beerApi = {
	getBeerQuery: async () => attempt(endpoints.randomBeer),
}