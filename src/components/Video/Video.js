/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
// Images
import VideoBg from "../../images/bg-cover-video-02.jpg";
import SectionHeading from "../ReusableComponents/SectionHeading";
import VideoPopup from "./VideoPopup";

const Video = ({isOpen, setIsOpen}) => {
  return (
    <section className="video" css={styles}>
      <div className="overlay"></div>
      <Container>
        <SectionHeading headingText1="Discover" headingText2="OUR VIDEO" />
        <div className="video-play" onClick={() => setIsOpen(!isOpen)}>
          <i class="fas fa-caret-right fa-3xl"></i>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${VideoBg}')no-repeat bottom/cover;
  background-attachment: fixed;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: .4;
  }
  .container {
    padding: 200px 0;
    position: relative;
    z-index: 10;
    .sectionHeading {
      text-align: center;
      h3 {
        color: #fff;
      }
    }
    .video-play {
      width: 100%;
      height: 80px;
      max-width: 80px;
      max-height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 50%;
      cursor: pointer;
      margin: 40px auto 0 auto;
       i {
         font-size: 4rem;
         margin: 0 0 0 10px;
       }
    }
  }
`;

export default Video;
