import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { chatsReducer } from './chats';
import { profileReducer } from "./profile";
import { messagesReducer} from "./messages";
import { beerReducer } from './beer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	beer: beerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
	persistedReducer, 
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);