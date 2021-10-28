import { db } from '../../api/firebase';
import { ref, onValue, update  } from "firebase/database";


export const SET_USERS = 'USERS::SET_USERS';
export const SET_PROFILE_AND_BUDDIES = 'USERS::SET_PROFILE_AND_BUDDIES';
export const SET_CHATS = 'USERS::SET_CHATS';
export const CLEAR_USERS_STORE = 'USERS::CLEAR_USERS_STORE';
export const CHANGE_USER_NAME_IN_STORE = 'USERS::CHANGE_USER_NAME_IN_STORE';

const usersDataBaseRef = ref(db, 'users/');

export const createUsersState = (authed) => (dispatch) => {
  if (authed) {
    onValue(usersDataBaseRef, (snapshot) => {
      const payload = snapshot.val();
      dispatch(setUsers(payload));
      dispatch(setProfileAndBuddies());
      dispatch(setChats());
    })
  }
}

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
});

export const setProfileAndBuddies = () => ({
  type: SET_PROFILE_AND_BUDDIES
});

export const setChats = () => ({
  type: SET_CHATS,
})

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


