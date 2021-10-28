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
        state.profile.chats = Object.values(state.profile.chats);
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