/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const InfoBtn = ({text}) => {
    return(
    <button className="infoBtn" css={styles}>{text}<i className="fas fa-long-arrow-alt-right"></i></button>
    );
};

const styles = css`
  border: none;
  cursor: pointer;
  transition: color 400ms ease-in-out;
  background: none;
  display: block;
  margin: 0 auto;
  font-weight: 100;
  &:hover {
    color: #d61c22;
  }
  i {
    padding: 0 10px;
  }
`

export default InfoBtn;