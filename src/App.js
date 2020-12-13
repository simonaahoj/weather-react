import "./Weather";
import './App.css';
import React from 'react';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Hello from react
        </h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
