import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux"

import './App.scss';
import HomePage from "./pages/homepage/homepage-component.jsx"
import ShopPage from "./pages/shop/shoppage-component.jsx"
import Header from "./components/header/header-component.jsx"
import SignInSignUp from "./pages/sign-in-sign-out/sign-in-sign-out-component.jsx"
import { auth, creatUserProfileDocument } from "./firebase/firebase-utils.js"; 
import { setCurrentUser } from "./redux/user/user-action.js"



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.Unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot (snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
      }
    setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
   return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" render={() => this.props.currentUser ? 
          (<Redirect to="/" />) : 
          (<SignInSignUp/>) } />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
}) 
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch  (setCurrentUser(user))

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
