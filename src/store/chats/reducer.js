import { SET_CHATS } from "./actions";
// import { ADD_CHAT, REMOVE_CHAT } from './actions';
// import faker from 'faker';

const initialState = []

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHATS:
			state = action.payload;
			return state;
		// case ADD_CHAT:
		// 	let ChatListToAdd = state.slice();
		// 	ChatListToAdd.unshift({
		// 		id: action.id,
		// 		avatar: faker.image.avatar(),
		// 		name: faker.name.firstName()
		// 	});
		// 	return ChatListToAdd;
		// case REMOVE_CHAT:
		// 	let ChatListToRemove = state.slice();
		// 	ChatListToRemove.splice(ChatListToRemove.indexOf(action.chat), 1);
		// 	return ChatListToRemove;
		default:
			return state;
	}
}