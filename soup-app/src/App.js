import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import withAuthenticate from './components/authentication/withAuthenticate';
import HomeContainer from './components/homepage/HomeContainer';

import Navigation from './components/header/Navigation'
import Home from './components/homepage/Home'
import AddInventory from './components/inventory/AddInventory'

import Login from './components/login/Login'
import Signup from './components/login/Signup'

import PrivateRoute from './components/privateRoute/PrivateRoute'

function App() {
  // const ComponentFromWithAuthenticate = withAuthenticate(HomeContainer);

  return (
    <div className="App">
      {/* <ComponentFromWithAuthenticate /> */}
      {/* <Route path="/" component={Navigation} /> */}

      <Navigation />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Home}></Route>
      <Route path="/AddInventory" component={AddInventory}></Route>
    </div>
  );
}

export default App;

