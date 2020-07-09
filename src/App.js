import React from 'react';
import './App.css';

// Components
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Welcome />
    </div>
  );
}

export default App;
