import React from "react";
import {SignUpContainer, SignUpTitle} from './signup.styles';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return; //Do nothing.
    }
    try {
      //The userAuth object returned by the Firebase is on the key user.
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      //If no error is thrown by the code in the line above then clear the fields of the sign up form.
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value, //This would work for all the properties in the state i.e., displayName, email, password, and confirmPassword
    });
  };
  render() {
      const {displayName, email, password, confirmPassword} = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>New Users Registration</SignUpTitle>
        <span className="sign-up-form">
          Sign up with your email and password.
        </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Full Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}
export default SignUp;
