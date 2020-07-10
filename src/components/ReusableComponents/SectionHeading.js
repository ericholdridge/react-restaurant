/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SectionHeading = ({headingText1, headingText2}) => {
  return (
    <div className="sectionHeading" css={styles}>
      <h4>{headingText1}</h4>
      <h3>{headingText2}</h3>
    </div>
  );
};

const styles = css`
  width: 100%;
  h4 {
    color: #d61c22;
    font-family: 'Courgette',cursive;
    font-size: 1.8rem;
  }
  h3 {
    font-size: 3rem;
    letter-spacing: 4px;
  }
`

export default SectionHeading;
