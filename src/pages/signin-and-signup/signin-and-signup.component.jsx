import React from "react";
import { SigninAndSignupContainer } from "./signin-and-signup.styles";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SigninAndSignup = () => (
  <SigninAndSignupContainer>
    <SignIn />
    <SignUp />
  </SigninAndSignupContainer>
);

export default SigninAndSignup;
