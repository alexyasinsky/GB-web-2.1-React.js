import { db } from '../../api/firebase';
import { ref, onValue, update  } from "firebase/database";
// export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const SET_CHATS = 'CHATS::SET_CHATS';

const chatsDataBaseRef = ref(db, 'chats/');

// export const addChat = (id) => ({
// 	type: ADD_CHAT,
// 	id
// })

export const setChats = (payload) => {
	debugger
	console.log(payload);
	return ({
	type: SET_CHATS,
	payload
})};

export const createChatsState = (authed) => (dispatch) => {

	if (authed) {
		onValue(chatsDataBaseRef, snapshot => {
			debugger
			const payload = Object.values(snapshot.val());
			dispatch(setChats(payload));
		})
	}
}



// export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';
//
// export const removeChat = (chat) => ({
// 	type: REMOVE_CHAT,
// 	chat
// })