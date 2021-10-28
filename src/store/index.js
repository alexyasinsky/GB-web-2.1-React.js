import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { usersReducer } from "./users";
import { messagesReducer} from "./messages";
import { beerReducer } from './beer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';
import {chatsReducer} from "./chats/reducer";

const rootReducer = combineReducers({
	users: usersReducer,
	messages: messagesReducer,
	beer: beerReducer,
	chats: chatsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
	persistedReducer, 
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);