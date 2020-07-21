/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../ReusableComponents/Button";

const ReservationForm = () => {
  return (
    <form action="" className="reservationForm" css={styles}>
      <div>
        <label>Date</label>
        <input type="date" />
      </div>
      <div>
        <label>Time</label>
        <input type="time" />
      </div>
      <div>
        <label>People</label>
        <input type="time" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Name"/>
      </div>
      <div>
        <label>Phone</label>
        <input type="text" placeholder="Phone" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <Button btnText="BOOK TABLE" />
    </form>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: 100%;
    max-width: 299px;
    max-height: 60px;
    margin: 0 0 40px 0;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      outline: none;
      border: 2px solid #d9d9d9;
      padding: 0 0 0 14px;
      &:focus {
        border: 2px solid #ec1d25;
      }
    }
  }
  .btn {
    background: #000;
    color: #fff;
    text-align: center;
    margin: 20px auto 0 auto;
    transition: background 400ms ease-in-out;
    outline: none;
    &:hover {
      background: #ec1d25;
    }
  }
`;

export default ReservationForm;
