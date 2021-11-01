import { db } from '../../api/firebase';
import { ref, onValue } from "firebase/database";

export const SET_CHATS = 'CHATS::SET_CHATS';

const chatsDataBaseRef = ref(db, 'chats/');

export const setChats = (payload) => ({
	type: SET_CHATS,
	payload
});

export const createChatsState = (authed) => (dispatch) => {
	if (authed) {
		onValue(chatsDataBaseRef, snapshot => {
			if(snapshot.exists()) {
				const payload = Object.values(snapshot.val());
				dispatch(setChats(payload));
			}
		})
	}
}

