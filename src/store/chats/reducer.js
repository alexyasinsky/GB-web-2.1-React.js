
import { ADD_CHAT, REMOVE_CHAT } from './actions';
import faker from 'faker';

const initialChatList = Array.from({
	length: 10,
}).map(() => ({
	id: faker.phone.phoneNumber(),
	avatar: faker.image.avatar(),
	name: faker.name.firstName()
}));

export const chatsReducer = (state = initialChatList, action) => {
	switch (action.type) {
		case ADD_CHAT:
			let ChatListToAdd = state.slice();
			ChatListToAdd.unshift({
				id: action.id,
				avatar: faker.image.avatar(),
				name: faker.name.firstName()
			});
			return ChatListToAdd;
		case REMOVE_CHAT:
			let ChatListToRemove = state.slice();
			ChatListToRemove.splice(ChatListToRemove.indexOf(action.chat), 1);
			return ChatListToRemove;
		default:
			return state;
	}
}