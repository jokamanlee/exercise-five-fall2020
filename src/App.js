import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";

import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise-five-fall2020.firebaseapp.com",
  databaseURL: "https://exercise-five-fall2020.firebaseio.com",
  projectId: "exercise-five-fall2020",
  storageBucket: "exercise-five-fall2020.appspot.com",
  messagingSenderId: "431814036986",
  appId: "1:431814036986:web:188e34dd69384fb5a6a843",
  measurementId: "G-W1XBZ3G7NV",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //boolean to determine if logged in
  const [loading, setLoading] = useState(true); //is page loading
  // const [userInformation, setUserInformation] = useState({});

  //Ensure app is inialized when it is ready
  useEffect(() => {
    //Initializes Firebase

    //If firebase is not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);
  //Function for logging in
  function LoginFunction(e) {
    //this is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassowrd.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (response) {
        console.log("LOGIN RESPONSE", response);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }
  //FUnction for logging out
  function LogoutFunction() {
    //Function to run when you want to log out...
  }
  function CreateAccountFunction(e) {
    //what will run when you create an account...
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }
  console.log({ loggedIn });
  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFuntion={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction} />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
