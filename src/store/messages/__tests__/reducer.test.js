import { messagesReducer, initialState } from "../reducer";
import {setMessagesList} from "../actions";

const messagesList = Array.from({
	length: 5,
}).map((_, index) => `message ${index}`);

describe('messagesReducer tests', () => {
	it('проверить работу редьюсера без экшена', () => {
		const result = messagesReducer();
		expect(result).toEqual(initialState);
	});
	it('записать список чатов в стейт', () => {
		const result = messagesReducer(undefined, setMessagesList(messagesList));
		expect(result).toEqual(messagesList);
	});
})