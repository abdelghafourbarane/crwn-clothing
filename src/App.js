import React from 'react'


import './App.css';
import {Route} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compnent'

import {auth, createUserProfileDocument} from "./firebase/firebase.utils"



class App extends React.Component {

  constructor(){
    super();
    
    this.state={
      CurrentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){

        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            CurrentUser:{
              id:snapShot.id,
              ...snapShot.data()}
          })
          console.log(this.state);
        })

      }

      this.setState({CurrentUser:userAuth});
    })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header currentUser={this.state.CurrentUser}/>
  
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </div>
    );
  
  }
}

export default App;
