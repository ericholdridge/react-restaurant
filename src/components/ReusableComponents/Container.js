/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children }) => (
  <div className="container" css={styles}>
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 90%;
    /* border: 1px solid green; */
  }
`;

export default Container;
