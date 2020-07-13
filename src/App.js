import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import Discover from "./components/Discover/Discover";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Events from "./components/Events/Events";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      <Discover />
      <Intro />
      <Menu />
      <Events />
      <Reservation />
      <Review />
    </div>
  );
};

export default App;
