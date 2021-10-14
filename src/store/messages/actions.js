import { db } from '../../api/firebase';
import { ref, onValue, update } from "firebase/database";


// export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const SET_MESSAGES_LIST = 'MESSAGES::SET_MESSAGES_LIST'


// export const addMessage = (id, message) => ({
// 	type: ADD_MESSAGE,
// 	id,
// 	message
// });

// export const addMessageWithThunk = (id, message, user, buddy) => (dispatch) => {
//   dispatch(addMessage(id, message));
//   if (message.user === user) {
//     const botMessage = {
//       isOwner: false,
//       user: buddy,
//       text: `${message.text}?`,
//       time: new Date().toLocaleTimeString()
//     };
//     setTimeout(()=>dispatch(addMessage(id, botMessage)), 1500);
//   }
// }

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

