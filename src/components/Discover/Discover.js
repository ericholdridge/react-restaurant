/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";

// Images
import DiscoverBg from "../../images/bg-intro-01.jpg";

const Discover = () => {
    return(
        <section className="discover" css={styles}>
          <Container>
            <SectionHeading headingText1="Discover" headingText2="PATO PLACE"/>
          </Container>
        </section>
    );
};

const styles = css`
  width: 100%;
  background: url('${DiscoverBg}')no-repeat center/cover;
  background-attachment: fixed;
  .container {
    padding: 150px 0;
    .sectionHeading {
      text-align: center;
      h3 {
        color: #fff;
        letter-spacing: 8px;
      }
    }
  }
`

export default Discover;