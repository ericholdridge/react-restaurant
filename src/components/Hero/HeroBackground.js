/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroBackground = ({ img }) => {
  return (
    <div className="heroBackground">
      <img src={img} alt="" />
    </div>
  );
};

const styles = css`
  width: 100%;
`

export default HeroBackground;
