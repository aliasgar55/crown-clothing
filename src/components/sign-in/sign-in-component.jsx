import React from "react";

import "./sign-in-styles.scss"
import FormInput from "../../components/form-input/form-input-component.jsx"
import CustomButton from "../../components/custom-button/custom-button-component.jsx"
import { auth, signInWithGoogle } from "../../firebase/firebase-utils.js"




class SignIn extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};

	}	
	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email:"", password:""})

		} catch (error) {
			console.log(error)
		}
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]:value })
	} 

	render() {
		return (
			<div className="sign-in">
				<h2>I already have account</h2>
				<span>Sign in with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email"
						label="Email" 
						type="email" 
						value ={this.state.email} 
						onChange={this.handleChange}
						required
						 />

					<FormInput 
						name="password" 
						type="password"
						label="Password" 
						value={this.state.password} 
						onChange={this.handleChange}
						required
						/>
						<div className="buttons">
							<CustomButton type="submit">SIGN IN</CustomButton>
							<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
				         		Sign in with Google
				           	</CustomButton>
						</div>
				</form>

			</div>

		);
	}

}

export default SignIn; 