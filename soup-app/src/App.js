import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Navigation from './components/header/Navigation'
import Home from './components/homepage/Home'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import ProtectedHome from './components/homepage/ProtectedHome';
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

