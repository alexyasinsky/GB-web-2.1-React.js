

import { 
  SET_CHATLIST,
  SET_USERS, 
  SET_PROFILE_AND_BUDDIES_AND_CHATS,
  CLEAR_USERS_STORE, 
  CHANGE_USER_NAME_IN_STORE,
} from './actions';

const initialState = {}


export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHATLIST: 
      state.chatlist = action.payload;
      return state;
    case SET_USERS:
      state.users = action.payload;
      return state;
    case SET_PROFILE_AND_BUDDIES_AND_CHATS:
      let list = Object.assign({}, state.users);
      const profileUser = action.payload;
      for (let item in list) {
        if (list[item].email === profileUser.email) {
          state.profile = list[item];
          delete list[item];
        }
      }
      state.buddies = Object.values(list); // нужен для проверки перехода по ссылке в App.js (:id);
      if (state.profile?.chats) {
            if (!state.profile.chats) {
              state.profile.chats = [];
            } else {
          let profileChats = [];
          const profileChatsIds = state.profile.chats;
          const chatlist = state.chatlist;
          for (let id in profileChatsIds) {
            chatlist.forEach(chat => {
              if (chat.chatId === profileChatsIds[id]) {
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
                  profileChatId: id,
                  id: chat.chatId,
                  buddy: currentBuddy,
                  dialogId: chat.dialogId,
                }
                profileChats.push(chatModified);
              }
            });
          }
        state.profile.chats = profileChats;
      }  }    
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