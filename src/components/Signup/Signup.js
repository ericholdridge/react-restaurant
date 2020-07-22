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
        <h3>SPECIALS SIGN UP</h3>
        <form action="">
          <input type="text" placeholder="Email Address" />
          <i class="fas fa-envelope"></i>
        </form>
        <Button btnText="SIGN-UP" />
      </Container>
    </section>
  );
};

const styles = css`
  background: url('${SignupBg}')no-repeat center/cover;
  .container {
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 1.5rem;
    }
    form {
      width: 100%;
      max-width: 300px;
      height: 48px;
      position: relative;
      margin: 0 20px;
      input {
        height: 100%;
        width: 100%;
        outline: none;
        border: 2px solid #d9d9d9;
        border-radius: 10px;
        padding: 0 0 0 10px;
        &:focus{
          border: 2px solid #ec1d25;
        }
      }
      i {
        position: absolute;
        top: 8px;
        transform: translate(50%, 50%);
        right: 24px;
        color: #666666;
      }
    }
    .btn {
      background: #000;
      color: #fff;
      transition: background 400ms ease-in-out;
      padding: 14px 40px;
      &:hover {
        background: #ec1d25;
        color: #fff;
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      flex-direction: column;
      form {
        margin: 20px 0;
      }
      .btn {
        padding: 14px 50px;
        letter-spacing: 1.2px;
      }
    }
  }
`;

export default Signup;
