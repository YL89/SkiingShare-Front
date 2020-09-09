import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import UserAuthContext from './contexts/UserAuthContext'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  const [authStatus, setAuthStatus] = useState(false);
  const value = { authStatus, setAuthStatus };

  return (
    <UserAuthContext.Provider value={value}>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/signin' render={() => (
            <Login />
          )} />
          <Route exact path='/signup' render={() => (
            <Signup />
          )} />
          <Route exact path='/user-account' render={() => (
            <UserProfile />
          )} />
        </Switch>
      </div>
    </UserAuthContext.Provider>
  )

}