/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";

// Images
import Gallery1 from "../../images/photo-gallery-thumb-01.jpg";
import Gallery2 from "../../images/photo-gallery-thumb-02.jpg";
import Gallery3 from "../../images/photo-gallery-thumb-03.jpg";
import Gallery4 from "../../images/photo-gallery-thumb-04.jpg";
import Gallery5 from "../../images/photo-gallery-thumb-05.jpg";
import Gallery6 from "../../images/photo-gallery-thumb-06.jpg";
import Gallery7 from "../../images/photo-gallery-thumb-07.jpg";
import Gallery8 from "../../images/photo-gallery-thumb-08.jpg";
import Gallery9 from "../../images/photo-gallery-thumb-09.jpg";
import Gallery10 from "../../images/photo-gallery-thumb-10.jpg";
import Gallery11 from "../../images/photo-gallery-thumb-11.jpg";
import Gallery12 from "../../images/photo-gallery-thumb-12.jpg";

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
            <div className="feed">
              <div className="wrap">
                <div>
                  <i class="fab fa-twitter"></i>
                  <a href="">@colorlib</a>
                </div>
                <p>
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </p>
                <div className="link">
                  <a href="">https://buff.ly/2zaSfAQ</a>
                </div>
                <div className="date">
                  <span>21 Dec 2017</span>
                </div>
              </div>
              <div className="wrap">
                <div>
                  <i class="fab fa-twitter"></i>
                  <a href="">@colorlib</a>
                </div>
                <p>
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </p>
                <div className="link">
                  <a href="">https://buff.ly/2zaSfAQ</a>
                </div>
                <div className="date">
                  <span>21 Dec 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card*/}
        <div className="cardThree">
          <h3>GALLERY</h3>
          <div className="image-gallery">
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery1} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery2} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery3} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery4} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery5} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery6} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery7} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery8} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery9} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery10} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery11} alt="" />
            </div>
            <div className="div">
              <div className="overlay"></div>
              <img src={Gallery12} alt="" />
            </div>
          </div>
        </div>
        {/* End Card*/}
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
        letter-spacing: 2px;
      }
      .contactUs {
        padding: 20px 0 40px 0;
        div {
          color: #999999;
          padding: 10px 0;
          font-size: 0.9rem;
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
          font-size: 0.9rem;
        }
      }
    }
    .cardTwo {
      width: 100%;
      max-width: 400px;
      h3 {
        color: #fff;
        letter-spacing: 2px;
      }
      .feed {
        padding: 20px 0 40px 0;
        .wrap {
          color: #999999;
          div {
            padding: 0 0 10px 0;
            i {
            }
            a {
              color: #ec1d25;
              margin: 0 0 0 10px;
            }
          }
          p {
            font-size: 0.9rem;
          }
          .link {
            a {
              color: #ec1d25;
              text-decoration: none;
              margin: 10px 0 0 0;
              display: block;
            }
          }
          .date {
            padding: 12px 0;
          }
        }
      }
    }
    .cardThree {
      width: 100%;
      max-width: 360px;
      h3 {
        color: #fff;
        letter-spacing: 2px;
      }
      .image-gallery {
        padding: 20px 0 40px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          position: relative;
          margin: 0 0 10px 0;
          cursor: pointer;
          transition: background 400ms ease-in-out;
          &:hover {
            opacity: 0.2;
            .overlay {
              position: absolute;
              background: pink
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              height: 100%;
              cursor: pointer;
              display: block;
            }
          }
          .overlay {
            display: none;
          }
          img {
            width: 100%;
            max-width: 80px;
            height: 80px;
            display: block;
          }
        }
      }
    }
  }
`;

export default Footer;
