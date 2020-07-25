import React from "react";
import {HomePageContainer}  from './homepage.styles';
import Directory from '../../components/directory/directory.component';

/* We don't want to store any state and we don't need any life cycle method in this module, 
 so we will make a functional component instead of a class component.
*/
const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);
export default HomePage;
