import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/homepage/Home'
import Login from './components/login/Login'
import Signup from './components/login/Signup'

import ProtectedHome from './components/homepage/ProtectedHome';
import PrivateRoute from './components/authentication/PrivateRoute'

function App() {
  return (
    <div className="App">
      <div className="main-container">

        <Header />

        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />

        <Route path="/signup" component={Signup} />

        <PrivateRoute exact path="/protectedHome" component={ProtectedHome} />
        
      </div>
    </div>
  );
}

export default App;

