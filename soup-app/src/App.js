import React from 'react';
import './App.css';

import withAuthenticate from './components/authentication/withAuthenticate';
import HomeContainer from './components/homepage/HomeContainer';

function App() {
  const ComponentFromWithAuthenticate = withAuthenticate(HomeContainer);
  
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
