import {CartActionTypes} from "./cart-action-types.js"
import { addItemToCart } from "./cart-utils.js"

const INITIAL_STATE ={
	hidden: true,
	cartItems: []

}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGEL_CART_HIDDEN:
		return {
			...state,
			hidden: !state.hidden
		}

		case CartActionTypes.ADD_ITEMS:
		return {
			...state,
			cartItems: addItemToCart(state.cartItems, action.payload)
		}


		default:
			return state;
	}
}

export default cartReducer;