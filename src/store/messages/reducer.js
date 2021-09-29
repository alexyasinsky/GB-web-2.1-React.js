import { ADD_MESSAGE } from "./actions";

const initialState = {
	messagesList: {},
}

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			const currentList = state.messagesList[action.id] || [];
			return {
				...state,
				messagesList: {
					...state.messagesList,
					[action.id]: [
						...currentList,
						{
							...action.message,
						}
					]
				},
			}
		default:
			return state;
	}
}