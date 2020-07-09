/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";

const Welcome = () => {
  return (
    <section className="welcome" css={styles}>
      <Container>
        <div className="card1">
          <SectionHeading headingText1="Italian Restaurant" headingText2="WELCOME"/>
          <p></p>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  .container {
    border: 1px solid red;
    padding: 40px 0;
    .card1 {
      width: 100%;
      max-width: 500px;
      border: 1px solid black;
      padding: 40px;
      .sectionHeading {
        border: 1px solid green;
        text-align: center;
      }
    }
  }
`;

export default Welcome;
