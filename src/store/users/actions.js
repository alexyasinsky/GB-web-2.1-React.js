import { db } from '../../api/firebase';
import { ref, onValue } from "firebase/database";

export const SET_PROFILE_AND_BUDDIES = 'PROFILE::SET_PROFILE_AND_BUDDIES';
export const SET_USERS = 'PROFILE::SET_USERS';
export const CLEAR_USERS_STORE = 'PROFILE::CLEAR_USERS_STORE';

const usersDataBaseRef = ref(db, 'users/');

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
});

export const createUsersState = (authed) => (dispatch) => {
  if (authed) {
    onValue(usersDataBaseRef, (snapshot) => {
      const payload = snapshot.val();
      dispatch(setUsers(payload));
      dispatch(setProfileAndBuddies());
    })
  }
}

export const setProfileAndBuddies = () => ({
  type: SET_PROFILE_AND_BUDDIES
});

export const clearUsersStore = () => ({
  type: CLEAR_USERS_STORE
});
