import { db } from '../../api/firebase';
import { ref, onValue, update  } from "firebase/database";

export const SET_PROFILE_AND_BUDDIES_AND_CHATS = 'USERS::SET_PROFILE_AND_BUDDIES_AND_CHATS';
export const SET_USERS = 'USERS::SET_USERS';
export const CLEAR_USERS_STORE = 'USERS::CLEAR_USERS_STORE';
export const CHANGE_USER_NAME = 'USERS::CHANGE_USER_NAME';

const usersDataBaseRef = ref(db, 'users/');

export const createUsersState = (authed) => (dispatch) => {
  if (authed) {
    onValue(usersDataBaseRef, (snapshot) => {
      const payload = snapshot.val();
      dispatch(setUsers(payload));
      dispatch(setProfileAndBuddiesAndChats());
    })
  }
}

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
});

export const setProfileAndBuddiesAndChats = () => ({
  type: SET_PROFILE_AND_BUDDIES_AND_CHATS
});

export const clearUsersStore = () => ({
  type: CLEAR_USERS_STORE
});

export const changeUserNameInStore = (name) => ({
  type: CHANGE_USER_NAME,
  name
})

export const changeUserName = (id, name) => dispatch => {
  update(usersDataBaseRef, {
    [`/${id}/name`] : name,
  });  
  dispatch(changeUserNameInStore(name));
}
