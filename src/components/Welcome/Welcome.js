/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";
import InfoBtn from "../ReusableComponents/InfoBtn";

// Images
import WelcomeBg from "../../images/pattern1.png";
import OurStoryImg from "../../images/our-story-01.jpg";

const Welcome = () => {
  return (
    <section className="welcome" css={styles}>
      <Container>
        <div className="card1">
          <SectionHeading
            headingText1="Italian Restaurant"
            headingText2="WELCOME"
          />
          <p>
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
          <InfoBtn text="OUR STORY"/>
        </div>
        <div className="image">
          <img src={OurStoryImg} alt=""/>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${WelcomeBg}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 140px 0;
    .card1 {
      width: 100%;
      max-width: 650px;
      padding: 40px;
      .sectionHeading {
        text-align: center;
      }
      p {
        text-align: center;
        color: #666666;
        line-height: 1.5;
        padding: 40px 0 30px 0;
      }
    }
    .image {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 10px;
        display: block;
        transition: all 800ms;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      flex-direction: column;
      .card1 {
        max-width: 700px;
        width: 100%;
        padding: 0;
        .sectionHeading {
          padding: 40px 40px 0 40px;
        }
        p {
          font-size: .9rem;
          line-height: 2;
        }
      }
      .image {
        margin: 40px 0 0 0;
      }
    }
  }
`;

export default Welcome;
