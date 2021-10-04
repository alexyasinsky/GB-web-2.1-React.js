import { CREATE_USERS_STATE } from './actions';

const initialState = {
	profile: {},
	buddies: {}
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_USERS_STATE:
			debugger
		const list = action.payload;
		for (let user in list) {
			if (user === action.id) {
				state.profile = list[user];
				delete list[user];
			}
		}
		state.buddies = list;
    return state;
		default:
			return state;
	}
}