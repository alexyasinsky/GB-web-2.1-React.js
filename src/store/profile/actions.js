import { db } from '../../api/firebase';
import { set, ref, onValue } from "firebase/database";

export const SET_USER = 'PROFILE::SET_USER';
export const CREATE_USERS_STATE = 'PROFILE::CREATE_USERS_STATE';
export const SET_USER_NAME = 'PROFILE::SET_USER_NAME';

const usersDataBaseRef = ref(db, 'users/');

export const createUsersState = (payload, id) => ({
  type: CREATE_USERS_STATE,
  payload,
  id
});


export const getUsersFromDataBase = (id) => (dispatch) => {
  onValue(usersDataBaseRef, (snapshot) => {
    debugger
    const payload = snapshot.val();
    dispatch(createUsersState(payload, id));
  })
}

export const setUserName = (name) => ({

});
