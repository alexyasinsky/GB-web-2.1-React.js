import { getAuth } from "firebase/auth";

import { SET_USERS, SET_PROFILE_AND_BUDDIES, CLEAR_USERS_STORE } from './actions';


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
          state.buddies = list;
        }
      }
      return state;
    case CLEAR_USERS_STORE: 
      for (let item in state) delete state[item];
      return state;
		default:
			return state;
	}
}