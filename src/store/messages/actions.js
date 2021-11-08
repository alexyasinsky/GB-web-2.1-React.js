import { db } from '../../api';
import { ref, onValue } from "firebase/database";


export const SET_MESSAGES_LIST = 'MESSAGES::SET_MESSAGES_LIST'

export const setMessagesList = (messagesList) => ({
  type: SET_MESSAGES_LIST,
  messagesList
})

export const initMessagesList = (id) => (dispatch) => {
  onValue(ref(db, 'dialogs/' + id), (snapshot) => {
    let payload = [];
    if (snapshot.exists()) {
      payload = Object.values(snapshot.val());
    }
    dispatch(setMessagesList(payload));
  })
}

