import { db } from '../../api/firebase';
import { ref, onValue, update  } from "firebase/database";

export const SET_PROFILE_AND_BUDDIES = 'PROFILE::SET_PROFILE_AND_BUDDIES';
export const SET_USERS = 'PROFILE::SET_USERS';
export const CLEAR_USERS_STORE = 'PROFILE::CLEAR_USERS_STORE';
export const CHANGE_USER_NAME = 'PROFILE::CHANGE_USER_NAME';

const usersDataBaseRef = ref(db, 'users/');

export const createUsersState = (authed) => (dispatch) => {
  if (authed) {
    onValue(usersDataBaseRef, (snapshot) => {
      const payload = snapshot.val();
      dispatch(setUsers(payload));
      dispatch(setProfileAndBuddies());
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