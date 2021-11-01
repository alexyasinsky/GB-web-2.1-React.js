import { getAuth } from "firebase/auth";

import { 
  SET_USERS, 
  SET_PROFILE_AND_BUDDIES, 
  SET_CHATS,
  CLEAR_USERS_STORE, 
  CHANGE_USER_NAME_IN_STORE,
} from './actions';

const initialState = {}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
      state.users = action.payload;
      return state;
    case SET_PROFILE_AND_BUDDIES:
      let list = Object.assign({}, state.users);
      const auth = getAuth();
      const profileUser = auth.currentUser;
      for (let item in list) {
        if (list[item].email === profileUser.email) {
          state.profile = list[item];
          delete list[item];
        }
      }
      state.buddies = Object.values(list); // нужен для проверки перехода по ссылке в App.js (:id);
      return state;
    case SET_CHATS: 
      if (!state.profile.chats) {
        state.profile.chats = [];
      } else {
        let chatList = [];
        const profileChats = state.profile.chats;
        let allChats = action.payload;
        for (let profileChat in profileChats) {
          allChats.forEach(chat => {
            if (chat.chatId === profileChats[profileChat]) {
              let buddyId = '';
              if (state.profile.id === chat.user1) {
                buddyId = chat.user2;
              } else {
                buddyId = chat.user1;
              }
              let currentBuddy = {};
              state.buddies.forEach(buddy => {
                if (buddy.id === buddyId) {
                  currentBuddy = buddy;
                  delete currentBuddy.chats;
                }
              })
              let chatModified = {
                profileChatId: profileChat,
                id: chat.chatId,
                buddy: currentBuddy,
                dialogId: chat.dialogId,
              }
              chatList.push(chatModified);
            }
          });
        }
        state.profile.chats = chatList;
      }
      return state;
    case CLEAR_USERS_STORE: 
      for (let item in state) delete state[item];
      return state;
    case CHANGE_USER_NAME_IN_STORE: 
      const name = action.name;
      state.profile.name = name;
      return state;
		default:
			return state;
	}
}