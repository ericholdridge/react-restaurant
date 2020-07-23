/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// Components
import Navbar from "../Navbar/Navbar";
import Button from "../ReusableComponents/Button";
// Images
import HeroBackground1 from "../../images/slide1-01.jpg";

const Hero = ({ openNav, setOpenNav }) => {
  return (
    <section className="hero" css={styles}>
      <div className={openNav ? "mobile-nav" : "hide"}>
        <div className="wrap">
          <div className="close" onClick={() => setOpenNav(false)}></div>
        </div>
        <div className="mobile-items">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">Gallery</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <Button btnText="RESERVATION" />
        </div>
      </div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div className="hero-content">
        <h3>Welcome to</h3>
        <h1>PATO PLACE</h1>
        <Button btnText="LOOK MENU" />
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
  .mobile-nav {
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 400ms ease-in-out;
    z-index: 1000;
    width: 100%;
    max-width: 420px;
    .wrap {
      padding: 20px 40px 0 0;
      .close {
        cursor: pointer;
        position: relative;
        &:before,&:after{
          content:'';
          position:absolute;
          width: 24px;
          height: 1px;
          background: #000;
          border-radius: 2px;
          top: 20px;
          right: 0;
        }
        &:before{
          -webkit-transform:rotate(45deg);
          -moz-transform:rotate(45deg);
          transform:rotate(45deg);
          right: 0;
        }
        &:after{
          -webkit-transform:rotate(-45deg);
          -moz-transform:rotate(-45deg);
          transform:rotate(-45deg);
          right: 0;
        }
        span {
          display: block;
          font-size: 1.8rem;
          cursor: pointer;
        }
      }
    }
    .mobile-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 0 0 0;
      a {
        margin: 10px 0;
        text-decoration: none;
        text-transform: uppercase;
        font-size: .9rem;
        transition: color 400ms ease-in-out;
        color: #000;
        &:hover {
          color: #ec1d25;
        }
      }
      .btn {
        color: #fff;
        background: #000;
        padding: 13px 26px;
        letter-spacing: 2px;
        font-size: .7rem;
        transition: background 400ms ease-in-out;
        margin: 20px 0 0 0;
        &:hover {
          background: #ec1d25;
        }
      }
    }
  }
  .hide {
    position: absolute;
    right: -600px;
  }
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
  @media (max-width: 500px) {
    .hero-content {
      h3 {
        font-size: 2.8rem;
      }
      h1 {
        font-size: 4rem;
        line-height: 1.1;
        padding: 10px 0 0 0;
      }
    }
  }
  @media (max-width: 768px) {
    .mobile-nav {
      max-width: 400px;
    }
  }
`;

export default Hero;
