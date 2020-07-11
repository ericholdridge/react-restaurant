import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import Discover from "./components/Discover/Discover";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Events from "./components/Events/Events";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      <Discover />
      <Intro />
      <Menu />
      <Events />
    </div>
  );
};

export default App;
