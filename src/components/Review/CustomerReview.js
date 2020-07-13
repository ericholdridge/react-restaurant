/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CustomerReview = ({ img, reviewInfo, name }) => {
  return (
    <div className="customerReview" css={styles}>
      <div className="customerImage">
        <img src={img} alt="" />
      </div>
      <div className="customerReviewInfo">
        <p>{reviewInfo}</p>
        <div className="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 810px;
  margin: 0 auto;
  cursor: pointer;
  .customerImage {
    width: 100%;
    max-width: 120px;
    max-height: 120px;
    border-radius: 50%;
    border: 4px solid #d61c22;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .customerReviewInfo {
    text-align: center;
    p {
      line-height: 1.6;
      padding: 20px 0 10px 0;
    }
    .rating {
      color: #d61c22;
    }
    span {
      display: block;
      padding: 10px 0 0 0;
      font-size: .8rem;
    }
  }
`;

export default CustomerReview;
