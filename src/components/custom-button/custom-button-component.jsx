import React from "react";

import "./custom-button-component.scss"

const CustomButtom = ({children, isGoogleSignIn, inverted,  ...otherProps }) => (
	<button 
	className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? 'google-sign-in' : ''} 
						custom-button` } {...otherProps}>
		{children}
	</button>
)

export default CustomButtom;