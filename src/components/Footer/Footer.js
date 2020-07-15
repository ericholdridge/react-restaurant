/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";

const Footer = () => {
  return (
    <section className="footer" css={styles}>
      <Container>
        <div className="cardOne">
          <h3>CONTACT US</h3>
          <div className="contactUs">
            <div>
              <i class="fas fa-map-marker-alt"></i>
              <span>8th floor, 379 Hudson St, New York, NY 10018</span>
            </div>
            <div>
              <i class="fas fa-phone-alt"></i>
              <span>(+1) 96 716 6879</span>
            </div>
            <div>
              <i class="fas fa-envelope"></i>
              <span>contact@site.com</span>
            </div>
          </div>
          <div className="openingTimes">
            <h3>OPENING TIMES</h3>
            <span>09:30 AM – 11:00 PM Every Day</span>
          </div>
        </div>
        {/* End Card*/}
        <div className="cardTwo">
          <div className="latestTwitter">
            <h3>LATEST TWITTER</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #222222;
  .container {
    padding: 80px 0;
    display: flex;
    justify-content: space-between;
    .cardOne {
      width: 100%;
      max-width: 400px;
      h3 {
        color: #fff;
      }
      .contactUs {
        padding: 20px 0 40px 0;
         div {
           color: #999999;
           padding: 10px 0;
           font-size: .9rem;
           span {
             margin: 0 0 0 12px;
           }
         }
      }
      .openingTimes {
        h3 {
          padding: 0 0 30px 0;
        }
        span {
          width: 100%;
          max-width: 180px;
          display: block;
          color: #999999;
          font-size: .9rem;
        }
      }
    }
  }
`;

export default Footer;
