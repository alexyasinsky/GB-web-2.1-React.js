import { GET_USERS } from './actions';

const initialState = {}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
		state = action.payload;	
    return state;
		default:
			return state;
	}
}