/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// Components
import Navbar from "../Navbar/Navbar";
import Button from "../ReusableComponents/Button";
// Images
import HeroBackground1 from "../../images/slide1-01.jpg";
import HeroBackground2 from "../../images/master-slides-01.jpg";
import HeroBackground3 from "../../images/master-slides-02.jpg";

const Hero = () => {
  return (
    <section className="hero" css={styles}>
      <Navbar />
      <div className="hero-content">
        <h3>Welcome to</h3>
        <h1>PATO PLACE</h1>
        <Button btnText="LOOK MENU"/>
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url('${HeroBackground1}') no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    text-align: center;
    color: #fff;
    h3 {
      font-size: 3.6rem;
      font-family: 'Courgette', cursive;
    }
    h1 {
      font-size: 6rem;
      letter-spacing: 8px;
    }
    .btn {
      margin: 40px 0 0 0;
    }
  }
`;

export default Hero;
