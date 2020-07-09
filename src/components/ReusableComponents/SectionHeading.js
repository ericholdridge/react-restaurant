/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SectionHeading = ({headingText1, headingText2}) => {
  return (
    <div className="sectionHeading">
      <h4>{headingText1}</h4>
      <h3>{headingText2}</h3>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 400px;
`

export default SectionHeading;
