import {CartActionTypes} from "./cart-action-types.js"

export const toggelCartHidden = () => ({
	type: CartActionTypes.TOGGEL_CART_HIDDEN

})
export const addItem = item => ({
	type: CartActionTypes.ADD_ITEMS,
	payload: item
}) 
