import { db } from '../../api';
import { ref, onValue, update  } from "firebase/database";
import { getAuth } from "firebase/auth";

export const SET_CHATLIST = 'USERS::SET_CHATLIST';
export const SET_USERS = 'USERS::SET_USERS';
export const SET_PROFILE_AND_BUDDIES_AND_CHATS = 'USERS::SET_PROFILE_AND_BUDDIES_AND_CHATS';
export const CLEAR_USERS_STORE = 'USERS::CLEAR_USERS_STORE';
export const CHANGE_USER_NAME_IN_STORE = 'USERS::CHANGE_USER_NAME_IN_STORE';

const usersDataBaseRef = ref(db, 'users/');
const chatsDataBaseRef = ref(db, 'chats/');

export const  createUsersState = (authed) => (dispatch) => {
  if (authed) {
    onValue(chatsDataBaseRef, snapshot => {
        if (snapshot.exists()) {
          const payload = Object.values(snapshot.val());
          dispatch(setChatlist(payload));
        } else {
          dispatch(setChatlist([]));
        }
			}
		)
    onValue(usersDataBaseRef, (snapshot) => {
      if (snapshot.exists()) {
        const auth = getAuth();
        const user = auth.currentUser;
        const payload = snapshot.val();
        dispatch(setUsers(payload));
        dispatch(setProfileAndBuddiesAndChats(user));
      }
    })
  }
}

export const setChatlist = (payload) => ({
  type: SET_CHATLIST,
  payload
})

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
});

export const setProfileAndBuddiesAndChats = (payload) => ({
  type: SET_PROFILE_AND_BUDDIES_AND_CHATS,
  payload
});

export const clearUsersStore = () => ({
  type: CLEAR_USERS_STORE
});

export const changeUserName = (id, name) => dispatch => {
  update(usersDataBaseRef, {
    [`/${id}/name`] : name,
  });  
  dispatch(changeUserNameInStore(name));
}

export const changeUserNameInStore = (name) => ({
  type: CHANGE_USER_NAME_IN_STORE,
  name
})


