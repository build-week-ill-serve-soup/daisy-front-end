import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import withAuthenticate from './components/authentication/withAuthenticate';
import ProtectedHome from './components/homepage/ProtectedHome';

import Navigation from './components/header/Navigation'
import Home from './components/homepage/Home'
import AddInventory from './components/inventory/AddInventory'

import Login from './components/login/Login'
import Signup from './components/login/Signup'

import PrivateRoute from './components/privateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">

      <Navigation />

      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/signup" component={Signup} />

      <PrivateRoute exact path="/protectedHome" component={ProtectedHome} />

    </div>
  );
}

export default App;

