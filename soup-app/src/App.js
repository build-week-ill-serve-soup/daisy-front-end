import React from 'react';
import './App.css';
import Home from './components/homepage/Home'
import Navigation from './components/navigation/Navigation'
import AddInventory from './components/inventory/AddInventory'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AddInventory />
    </div>
  );
}

export default App;
