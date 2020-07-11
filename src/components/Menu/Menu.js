/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";
import MenuCard from "./MenuCard";
import Button from "../ReusableComponents/Button";

// Images
import MenuBg from "../../images/pattern2.png";
import LunchImage from "../../images/our-menu-01.jpg";
import DinnerImage from "../../images/our-menu-05.jpg";
import HappyHourImage from "../../images/our-menu-13.jpg";
import DrinkImage from "../../images/our-menu-08.jpg";
import StartersImage from "../../images/our-menu-10.jpg";
import DessertImage from "../../images/our-menu-16.jpg";

const Menu = () => {
  return (
    <section className="menu" css={styles}>
      <SectionHeading headingText1="Discover" headingText2="OUR MENU" />
      <Container>
        <div className="left">
          <div className="lunch">
            <MenuCard img={LunchImage} />
            <Button btnText="LUNCH" />
          </div>
          <div className="dinner">
            <MenuCard img={DinnerImage} />
            <Button btnText="DINNER" />
          </div>
          <div className="happyHour">
            <MenuCard img={HappyHourImage} />
            <Button btnText="HAPPY HOUR" />
          </div>
        </div>
        <div className="right">
          <div className="drink">
            <MenuCard img={DrinkImage} />
            <Button btnText="DRINK" />
          </div>
          <div className="starters">
            <MenuCard img={StartersImage} />
            <Button btnText="STARTERS" />
          </div>
          <div className="starters">
            <MenuCard img={DessertImage} />
            <Button btnText="DESSERT" />
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${MenuBg}') no-repeat center/cover;
  .sectionHeading {
    padding: 100px 0 0 0;
    text-align: center;
  }
  .container {
    padding: 50px 0 100px 0;
    display: flex;
    justify-content: space-between;
    .left {
      max-width: 800px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .lunch, .dinner {
        position: relative;
        .image {
          max-width: 380px;
        }
        .btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.4rem;
          color: #000;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.8);
          outline: none;
          letter-spacing: 3px;
          transition: background 400ms ease-in-out;
          &:hover {
            background: #ec1d25;
            color: #fff;
          }
        }
      }
      .happyHour {
        width: 100%;
        margin: 30px 0 0 0;
        position: relative;
        .image {
        }
        .btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.4rem;
          color: #000;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.8);
          outline: none;
          letter-spacing: 3px;
          transition: background 400ms ease-in-out;
          &:hover {
            background: #ec1d25;
            color: #fff;
          }
        }
      }
    }
    .right {
      max-width: 360px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .drink, .starters, .dessert {
        height: 240px;
        position: relative;
        .image {
          height: 100%;
          img {
            height: 100%;
          }
        }
        .btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.4rem;
          color: #000;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.8);
          outline: none;
          letter-spacing: 3px;
          transition: background 400ms ease-in-out;
          &:hover {
            background: #ec1d25;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default Menu;
