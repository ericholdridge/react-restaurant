/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const VideoPopup = ({ setIsOpen }) => {
  return (
    <div className="videoPopup" css={styles}>
      <div className="close" onClick={() => setIsOpen(false)}>
        X
      </div>
      <div className="overlay"></div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5k1hSu2gdKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    position: fixed;
    z-index: 100;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 40px;
    z-index: 4000;
    background: green;
    position: fixed;
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    color: #d61c22;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  iframe {
    width: 800px;
    height: 500px;
    position: fixed;
    z-index: 2000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media (max-width: 768px) {
    iframe {
      width: 400px;
      height: 400px;
    }
  }
`;

export default VideoPopup;
