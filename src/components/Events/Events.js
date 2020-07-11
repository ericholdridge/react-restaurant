/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Carousel from "react-elastic-carousel";
import SectionHeading from "../ReusableComponents/SectionHeading";
import Container from "../ReusableComponents/Container";
import EventItem from "./EventItem";

// Images
import EventsBg from "../../images/bg-event-01.jpg";
import EventItemImage from "../../images/event-02.jpg";
import EventItemImage2 from "../../images/event-06.jpg";
import EventItemImage3 from "../../images/event-01.jpg";

const Events = () => {
  return (
    <section className="events" css={styles}>
      <SectionHeading headingText1="Upcomming" headingText2="EVENTS" />
      <Container>
        <Carousel>
          <EventItem
            img={EventItemImage}
            eventTitle="WINES DURING SPECIFIC NIGHTS"
            eventInfo="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia"
          />
          <EventItem
            img={EventItemImage2}
            eventTitle="WINES DURING SPECIFIC NIGHTS"
            eventInfo="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia"
          />
          <EventItem
            img={EventItemImage3}
            eventTitle="WINES DURING SPECIFIC NIGHTS"
            eventInfo="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia"
          />
        </Carousel>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${EventsBg}')no-repeat center/cover;
  .sectionHeading {
    text-align: center;
    padding: 100px 0 0 0;
    h3 {
      color: #fff;
    }
  }
  .container {
    padding: 50px 0 100px 0;
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
            &:active, &:focus {
              outline: none;
            }
            div {
              &:active, &:focus {
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

export default Events;
