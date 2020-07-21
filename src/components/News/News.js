/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";
import IntroCard from "../Intro/IntroCard";

// Images
import Blog1 from "../../images/blog-01.jpg";
import Blog2 from "../../images/blog-02.jpg";
import Blog3 from "../../images/blog-03.jpg";

const News = () => {
  return (
    <section className="news" css={styles}>
      <SectionHeading headingText1="Latest News" headingText2="THE BLOG" />
      <Container>
        <IntroCard
          img={Blog1}
          cardTitle="BEST PLACES FOR WINE"
          cardInfo="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
        />
        <IntroCard
          img={Blog2}
          cardTitle="EGGS AND CHEESE"
          cardInfo="Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat"
        />
        <IntroCard
          img={Blog3}
          cardTitle="STYLE THE WEDDING PARTY"
          cardInfo="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
        />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  .sectionHeading {
    text-align: center;
    padding: 100px 0 0 0;
  }
  .container {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px){
    .container {
      flex-direction: column;
    }
  }
`

export default News;
