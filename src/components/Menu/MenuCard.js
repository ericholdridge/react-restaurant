/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MenuCard = ({img}) => {
    return(
      <div className="image" css={styles}>
        <img src={img} alt=""/>
      </div>
    );
};

const styles = css`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  img {
    display: block;
    border-radius: 10px;
    width: 100%;
    transition: transform 400ms ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`

export default MenuCard;