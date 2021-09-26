import {attempt} from "../lib/attempt";
import {endpoints} from "../endpoints";

export const beerApi = {
	getBeer: async () => attempt(endpoints.randomBeer),
}