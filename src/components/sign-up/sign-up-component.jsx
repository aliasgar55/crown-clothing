import React from "react";

import  FormInput from "../form-input/form-input-component"
import "./sign-up-styles.scss"
import { auth, creatUserProfileDocument } from "../../firebase/firebase-utils.js"
import CustomButton from "../custom-button/custom-button-component.jsx"

class signUp extends React.Component {
	constructor() {
		super();

		this.state = { 
			displayName : "" ,
			email : "" ,
			password : "" ,
			confirmPassword : ""
		};
	}


	handelSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert("Password Dont Match")
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await creatUserProfileDocument(user, {displayName}); 
			this.setState({
				displayName : "" ,
				email : "" ,
				password : "" ,
				confirmPassword : ""
			});

		} catch (error) {
			console.log(error);
		}

	};

		handelChange = event => {
			const {name, value} = event.target;
			this.setState({ [name]: value  });
		};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (

			<div className ="sign-up">
				<h2>I don't have an account</h2>
				<span>Sign up with email and password</span>
				<form className="sign-up-form" onSubmit={this.handelSubmit}>
				<FormInput 
					name="displayName"
					type="text"
					value={ displayName }
					onChange={this.handelChange}
					label="Display Name"
					required
				/>
				<FormInput 
					name="email"
					type="email"
					value={ email }
					onChange={this.handelChange}
					label="Email"
					required
				/>
				<FormInput 
					name="password"
					type="password"
					value={ password }
					onChange={this.handelChange}
					label="Password"
					required
				/>
				<FormInput 
					name="confirmPassword"
					type="password"
					value={ confirmPassword } 
					onChange={this.handelChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit" >sign up</CustomButton>
				</form>

			</div>

		);
	}
}

export default signUp;

