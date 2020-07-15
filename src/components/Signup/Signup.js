/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
import Button from "../ReusableComponents/Button";

// Image
import SignupBg from "../../images/pattern1.png";

const Signup = () => {
  return (
    <section className="signup" css={styles}>
      <Container>
        <div>
          <h3>SPECIALS SIGN UP</h3>
          <form action="">
            <input type="text" placeholder="Email Address" />
            <i class="fas fa-envelope"></i>
            <Button btnText="SIGN-UP" />
          </form>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: url('${SignupBg}')no-repeat center/cover;
  .container {
    padding: 100px 0;
    div {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 1.4rem;
        letter-spacing: 1px;
        font-weight: 500;
      }
      form {
        height: 50px;
        width: 100%;
        max-width: 500px;
        margin: 0 0 0 20px;
        display: flex;
        input {
          height: 100%;
          width: 100%;
          max-width: 250px;
          border-radius: 10px 0 0 10px;
          padding: 0 0 0 14px;
          border: 2px solid #d9d9d9;
          border-right: 0;
          outline: none;
        }
        i {
          height: 100%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #d9d9d9;
          border-radius: 0 10px 10px 0;
          border-left: 0;
          padding: 0 14px 0 0;
        }
        .btn {
          background: #000;
          color: #fff;
          margin: 0 0 0 10px;
          padding: 0 50px;
          transition: background 400ms ease-in-out;
          &:hover {
            background: #ec1d25;
          }
        }
      }
    }
  }
`;

export default Signup;
