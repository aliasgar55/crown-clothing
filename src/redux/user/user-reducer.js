import { ActionTypes } from "./user-action-types.js"

const INITIAL_STATE = {
	currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}

		default:
			return state;
	}
};

export default userReducer;