export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (id, message) => ({
	type: ADD_MESSAGE,
	id,
	message
});

export const addMessageWithThunk = (id, message, user, buddy) => (dispatch, getState) => {
  dispatch(addMessage(id, message));
  if (message.user === user) {
    const botMessage = {
      isOwner: false,
      user: buddy,
      text: `${message.text}?`,
      time: new Date().toLocaleTimeString()
    };
    setTimeout(()=>dispatch(addMessage(id, botMessage)), 1500);
  }
}

