/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import IntroCard from "./IntroCard";

// Images
import Intro1 from "../../images/intro-01.jpg";
import Intro2 from "../../images/intro-02.jpg";
import Intro3 from "../../images/intro-04.jpg";

const Intro = () => {
  return (
    <section className="intro" css={styles}>
      <Container>
        <IntroCard
          img={Intro1}
          cardTitle="ROMANTIC RESTAURANT"
          cardInfo="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
        />
        <IntroCard
          img={Intro2}
          cardTitle="DELICIOUS FOOD"
          cardInfo="Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna"
        />
        <IntroCard
          img={Intro3}
          cardTitle="RED WINES YOU LOVE"
          cardInfo="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 100px 0;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      .introCard {
        width: 100%;
        max-width: none;
        padding: 0 0 30px 0;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1282px) {
    .container {
      flex-wrap: wrap;
      .introCard {
        max-width: 48%;
        padding: 0 0 30px 0;
      }
    }
  }
`;

export default Intro;
