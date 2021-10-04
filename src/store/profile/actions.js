import { db } from '../../api/firebase';
import { set, ref, onValue } from "firebase/database";

export const SET_USER = 'PROFILE::SET_USER';
export const GET_USERS = 'PROFILE::GET_USERS';
export const SET_USER_NAME = 'PROFILE::SET_USER_NAME';

const usersDataBaseRef = ref(db, 'users/');

export const getUsers = payload => ({
  type: GET_USERS,
  payload
});


export const getUsersFromDataBase = () => (dispatch) => {
  onValue(usersDataBaseRef, (snapshot) => {
    const payload = snapshot.val();
    dispatch(getUsers(payload));
  })
}

export const setUserName = (name) => ({

});
