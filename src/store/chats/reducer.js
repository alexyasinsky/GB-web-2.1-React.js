import {
	SET_CHATS,
	SET_USER_CHAT_LIST_DATA
} from "./actions";


const initialState = [];

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHATS:
			state = action.payload;
			return state;

		default:
			return state;
	}
}