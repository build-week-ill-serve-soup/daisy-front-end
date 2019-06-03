import React from 'react';
import './App.css';
import Home from './components/homepage/Home'
import AddInventory from './components/inventory/AddInventory'

function App() {
  return (
    <div className="App">
      <Home />
      <AddInventory />
    </div>
  );
}

export default App;
