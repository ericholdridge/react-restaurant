/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import InfoBtn from "../ReusableComponents/InfoBtn";

const EventItem = ({ img, eventTitle, eventInfo }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-10-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div>
        <h4>{timeLeft[interval]}</h4>
        <span>{interval}</span>
      </div>
    );
  });
  return (
    <div className="eventItem" css={styles}>
      <div className="eventImage">
        <img src={img} alt="" />
      </div>
      <div className="eventInfo">
        <h4>{eventTitle}</h4>
        <p>{eventInfo}</p>
        <div className="eventTimer">
          {timerComponents.length ? timerComponents : null}
        </div>
        <InfoBtn text="VIEW DETAILS" />
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  .eventImage {
    width: 100%;
    max-width: 600px;
    img {
      width: 100%;
      border-radius: 10px 0 0 10px;
      display: block;
    }
  }
  .eventInfo {
    width: 100%;
    max-width: 600px;
    background: #fff;
    text-align: center;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    cursor: pointer;
    h4 {
      font-size: 1.3rem;
      letter-spacing: 3px;
      font-weight: 500;
      padding: 0 0 16px 0;
    }
    p {
      color: #666666;
      line-height: 1.7;
    }
    .eventTimer {
      display: flex;
      justify-content: center;
      padding: 40px 0 60px 0;
      div {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        h4 {
          color: #ec1d25;
          font-size: 3rem;
          font-weight: 600;
          padding: 0;
        }
        span {
          text-transform: uppercase;
          font-weight: 600;
          color: #666666;
          font-size: 0.8rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .eventImage {
      border-radius: 10px 10px 0 0;
      max-width: none;
      width: 100%;
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
      }
    }
    .eventInfo {
      padding: 50px 10px;
      border-radius: 0 0 10px 10px;
      max-width: none;
      width: 100%;
      p {
        font-size: 0.9rem;
        padding: 10px;
      }
      .eventTimer {
        div {
          padding: 0 10px;
          h4 {
            font-size: 1.4rem;
            padding: 0 10px;
          }
        }
      }
    }
  }
  @media(min-width: 769px) and (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    .eventImage {
      border-radius: 10px 10px 0 0;
      img {
        border-radius: 10px 10px 0 0;
      }
    }
    .eventInfo {
      padding: 50px 0;
      border-radius: 0 0 10px 10px;
    }
  }
  @media (min-width: 1001px) and (max-width: 1281px) {
    .eventImage {
      img {
        height: 100%;
      }
    }
    .eventInfo {
      padding: 60px 0;
    }
  }
`;

export default EventItem;
