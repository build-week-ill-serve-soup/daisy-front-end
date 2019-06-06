import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import Navigation from './components/navigation/Navigation'
import HomePublic from './components/homepage/HomePublic'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import ProtectedHome from './components/homepage/HomeProtected';

import PrivateRoute from './components/privateRoute/PrivateRoute'

// function App() {

//   return (
//     <div className="App">

//       <Navigation />

//       <Route exact path="/" component={HomePublic} />

//       <Route path="/login" component={Login} />

//       <Route path="/signup" component={Signup} />

//       <PrivateRoute exact path="/protectedHome" component={ProtectedHome} />

//     </div>
//   );
// }

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={HomePublic} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='/protected' component={ProtectedHome} />
    </div>
  );
}

export default App;

