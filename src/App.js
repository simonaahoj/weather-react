
import './App.css';
import React from 'react';
import Weather from "./Weather";
import Search from "./Search"

function App() {
  return (
    <div className="App">
       <Search/>
      <Weather/>
       
      <a href="https://github.com/simonaahoj/weather-react" target="_blank">Opeon-source code,</a>by Simona Obornikova
    </div>
  );
}

export default App;
