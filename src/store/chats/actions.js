export const ADD_CHAT = 'CHATS::ADD_CHAT';

export const addChat = (id) => ({
	type: ADD_CHAT,
	id
})

export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';

export const removeChat = (chat) => ({
	type: REMOVE_CHAT,
	chat
})