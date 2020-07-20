import React from "react"
import { connect } from "react-redux";
 
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { toggelCartHidden } from "../../redux/cart/cart-action.js"

import "./cart-icon-styles.scss"

const CartIcon = ({ toggelCartHidden }) => (
<div className="cart-icon">
	<ShoppingIcon className="shopping-icon" onClick={toggelCartHidden}/>
	<span className="item-count">0</span>
</div>
);

const mapDispatchToProps = dispatch => ({
	toggelCartHidden: () => dispatch(toggelCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);