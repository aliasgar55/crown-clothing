import React from  "react";

import "./sign-in-sign-out-styles.scss"
import SignIn from "../../components/sign-in/sign-in-component.jsx"
import SignUp from "../../components/sign-up/sign-up-component.jsx"


const SignInSignUp = () => (

	<div className="sign-in-sign-out"> 
		<SignIn>SIGN IN</SignIn>

		<SignUp>SIGN UP</SignUp>
		
		
	</div>
)

export default SignInSignUp;