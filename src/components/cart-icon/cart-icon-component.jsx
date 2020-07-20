import React from "react"
import { connect } from "react-redux";
 
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { toggelCartHidden } from "../../redux/cart/cart-action.js"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"

import "./cart-icon-styles.scss"

const CartIcon = ({ toggelCartHidden, itemCount }) => (
<div className="cart-icon" onClick={toggelCartHidden} >
	<ShoppingIcon className="shopping-icon" />
	<span className="item-count">{itemCount}</span>
</div>
);
const mapStateToProps = (state) => ({
	itemCount : selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
	toggelCartHidden: () => dispatch(toggelCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);