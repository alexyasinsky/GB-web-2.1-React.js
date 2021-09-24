import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { chatsReducer } from './chats';
import { profileReducer } from "./profile";
import { messagesReducer} from "./messages";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
	rootReducer, composeEnhancers(applyMiddleware(thunk)));
