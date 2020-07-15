/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
import Video from "./components/Video/Video";
import VideoPopup from "./components/Video/VideoPopup";
import News from "./components/News/News";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";

const App = () => {
// Video popup modal for video section
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App" css={styles}>
      <Hero />
      <Welcome />
      <Discover />
      <Intro />
      <Menu />
      <Events />
      <Reservation />
      <Review />
      <Video isOpen={isOpen} setIsOpen={setIsOpen}/>
      { isOpen ? <VideoPopup isOpen={isOpen} setIsOpen={setIsOpen}/> : null }
      <News />
      <Signup />
      <Footer />
    </div>
  );
};

const styles = css`
  width: 100%;
  position: relative;
`

export default App;
