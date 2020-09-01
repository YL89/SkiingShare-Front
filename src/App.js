import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render() {
    return (
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
    )
  }
  ;
}

export default App;
