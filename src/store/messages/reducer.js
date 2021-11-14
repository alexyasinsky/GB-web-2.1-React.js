import { SET_MESSAGES_LIST } from "./actions";

export const initialState = [];

export const messagesReducer = (state = initialState, action) => {
	switch (action?.type) {
    case SET_MESSAGES_LIST:
      state = action.messagesList;
      return state;
		default:
			return state;
	}
}