export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (id, message) => ({
	type: ADD_MESSAGE,
	id,
	message
})