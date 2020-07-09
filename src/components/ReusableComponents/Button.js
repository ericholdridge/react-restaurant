/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";

const Button = ({ btnText }) => {
  return <button className="btn" css={styles}>{btnText}</button>;
};

const styles = css`
  display: inline-block;
  padding: 14px 30px;
  color: #ec1d25;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: .8rem;
`

export default Button;
