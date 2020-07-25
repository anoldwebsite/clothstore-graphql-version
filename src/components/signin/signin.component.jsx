import React from "react";
import {
  SigInContainer,
  SigninTitle,
  ButtonsBarContainer,
} from "./signin.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //If no error is thrown by the code in the line above then clear the sign in form.
      this.setState({ email: "", password: "" }); //Resetting the fields/props in the state with form submit
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }); //Dynamically setting the property name and its value.
  };

  render() {
    return (
      <SigInContainer>
        <SigninTitle>Existing Users</SigninTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
            <CustomButton type="button" onClick={signInWithFacebook}>
              Facebook Signin
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SigInContainer>
    );
  }
}
export default SignIn;
