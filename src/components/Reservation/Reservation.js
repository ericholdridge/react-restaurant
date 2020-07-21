/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import SectionHeading from "../ReusableComponents/SectionHeading";
import ReservationForm from "./ReservationForm";
import Button from "../ReusableComponents/Button";
// Images
import ReservationBg from "../../images/pattern1.png";
import BookingImg from "../../images/booking-01.jpg";

const Reservation = () => {
  return (
    <section className="reservation" css={styles}>
      <Container>
        <div className="cardLeft">
          <SectionHeading
            headingText1="Reservation"
            headingText2="BOOK TABLE"
          />
          <ReservationForm />
        </div>
        <div className="image">
          <img src={BookingImg} alt="" />
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${ReservationBg}')no-repeat center/cover;
  .container {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    .cardLeft {
      width: 100%;
      max-width: 620px;
      .sectionHeading {
        text-align: center;
        padding: 0 0 50px 0;
      }
      .reservationForm {
      }
    }
    .image {
      width: 100%;
      max-width: 400px;
      max-height: 400px;
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
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      .cardLeft {
        padding: 0 0 40px 0;
        .reservationForm {
          margin: 0 auto;
          div {
            margin: 20px auto;
            max-width: none;
            width: 100%;

          }
          button {
            margin: 30px auto 0 auto;
            display: inline;
          }
        }
      }
      .image {
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px){
    .container {
      flex-direction: column;
      .cardLeft {
        max-width: none;
        .reservationForm {
          div {
            max-width: 48%;
          }
        }
      }
      .image {
        padding: 30px 0 0 0;
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 993px) {
    .container {
      flex-direction: row;
      .cardLeft {
        max-width: none;
        width: 45%;
        .reservationForm {
          div {
            max-width: 45%;
          }
        }
      }
      .image {
        margin: 30px auto 0 auto;
      }
    }
  }
`;

export default Reservation;
