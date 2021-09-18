import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { profileReducer } from "./profile";

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
});

export const store = createStore(
	rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
