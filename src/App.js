import React from "react";
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
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
