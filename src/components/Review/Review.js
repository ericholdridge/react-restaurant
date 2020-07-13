/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Carousel from "react-elastic-carousel";
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";
import CustomerReview from "./CustomerReview";

// Images
import CustomerReview1 from "../../images/avatar-05.jpg";
import CustomerReview2 from "../../images/avatar-04.jpg";

const Review = () => {
  return (
    <section className="review" css={styles}>
      <SectionHeading headingText1="Customers Say" headingText2="REVIEW" />
      <Container>
        <Carousel>
          <CustomerReview
            img={CustomerReview1}
            reviewInfo="“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
          "
            name="MARIE SIMMONS ~ NEW YORK"
          />
          <CustomerReview
            img={CustomerReview2}
            reviewInfo="“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
          "
            name="MARIE SIMMONS ~ NEW YORK"
          />
          <CustomerReview
            img={CustomerReview1}
            reviewInfo="“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
          "
            name="MARIE SIMMONS ~ NEW YORK"
          />
        </Carousel>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  .sectionHeading {
    text-align: center;
    padding: 100px 0 50px 0;
  }
  .container {
    padding: 0 0 100px 0;
    .rec-carousel-wrapper {
      .rec-carousel {
        max-height: 360px;
        min-height: 360px;
        button {
          background: none;
          box-shadow: none;
        }
        .rec-slider-container {
          outline: none;
          &:active {
            outline: none;
          }
          .rec-slider {
            &:active,
            &:focus {
              outline: none;
            }
            div {
              &:active,
              &:focus {
                outline: none;
              }
            }
          }
        }
      }
      .rec-pagination {
        button {
          box-shadow: none;
          background: #666666;
        }
        button.rec-dot_active {
          background: #d41b22;
        }
      }
    }
  }
`;

export default Review;
