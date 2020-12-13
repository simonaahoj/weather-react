
import './App.css';
import React from 'react';
import Weather from "./Weather";
import Search from "./Search"

function App() {
  return (
    <div className="App">
        <Weather city="Paris" />
        <Search/>
      
    </div>
  );
}

export default App;
