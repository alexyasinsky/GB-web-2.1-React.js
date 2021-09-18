import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { profileReducer } from "./profile";
import { messagesReducer} from "./messages";

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer
});

export const store = createStore(
	rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
