/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import InfoBtn from "../ReusableComponents/InfoBtn";

const IntroCard = ({ img, cardTitle, cardInfo }) => {
  return (
    <div className="introCard" css={styles}>
      <div className="introImage">
        <img src={img} alt="" />
      </div>
      <div className="introInfo">
        <h3>{cardTitle}</h3>
        <p>{cardInfo}</p>
      </div>
      <InfoBtn text="LEARN MORE"/>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 380px;
  .introImage {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
      border-radius: 10px;
      transition: transform 600ms ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .introInfo {
    h3 {
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 2px;
      padding: 30px 0 0 0;
      cursor: pointer;
      transition: color 400ms ease-in-out;
      &:hover {
        color: #ec1d25;
      }
    }
    p {
      padding: 14px 0;
      color: #666666;
      line-height: 1.5;
      padding: 16px 0 24px 0;
    }
  }
  .infoBtn {
    margin: 0;
  }
`;

export default IntroCard;

