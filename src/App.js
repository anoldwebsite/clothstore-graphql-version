//App.js
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { Switch, Route, Redirect } from 'react-router-dom';
import {default as Header} from './components/header/header.container';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser as unboundImportedSetCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    /*
    In the line below, something is happening called "variable shadowing," which is potentially very confusing. This is because the variable inside your component is not the same function as the one (setCurrentUser) you imported at the top of your file.
    */
    const { setCurrentUser} = this.props; // we destructure the props to grab just the relevant action creator. setCurrentUser here is bound to store's dispatch function.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {//i.e. userAuth is not null then 
        const userRef = await createUserProfileDocument(userAuth); //Now, we have userRef object.
        //Now, that we have a reference to that place in the firestore database, we can check if the snapshot has changed.
        //This snapshot represents the data stored in the firebase database and we can get it by call method given below:
        //We have attached a listener, an anonymous function, below to this snapshot, so that we get fresh data.
        userRef.onSnapshot(snapshot => {
          setCurrentUser(//Calling our Redux action creater method that we get from props.
            {
              id: snapshot.id,
              ...snapshot.data()//Using the spread operator to spread all the values that we get.
            }
          )
        });
      }
      else {//null case i.e., userAuth is null
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    /* 
      We got this function when we added an observer for changes to the user's
       sign-in state using auth.onAuthStateChanged(). Now, we cna use this function
       to unsubscribe and relase memory resources. 
    */
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SigninAndSignup />)
          }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
);
const mapDispatchToProps = dispatch => (
  //When this function is called, we return the following object
  {
    // We get user from  ...snapshot.data()
    // And dispatch is supplied by Redux store as the function mapDispatchToProps is passed to connect() as callback; so when this callback is invoked, Redux will supply "dispatch".
    setCurrentUser: user => dispatch(unboundImportedSetCurrentUser(user))//dispatching an object
  }
);
//passing an object as a second argument. Due to the first argument and the function mapStateToProps above, now
//we have access to this.props.currentUser
export default connect(mapStateToProps, mapDispatchToProps)(App);//Export our wrapped component.
/* If you pass null as the first argument to connect(), it will not subscribe to the Redux store at all. So, if all you want to do is inject some bound action creators you can do that using connect() with a minimal performance impact. This approach can be an excellent way to avoid passing an action creator down to a deeply nested child component. You can connect it directly instead and not lose too much sleep over it. */
