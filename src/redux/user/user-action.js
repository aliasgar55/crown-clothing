import { ActionTypes } from "./user-action-types.js"

export const setCurrentUser = user => ({
	type: ActionTypes.SET_CURRENT_USER,
	payload: user
})