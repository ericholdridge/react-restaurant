/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../ReusableComponents/Container";
// Logo
import PatoLogo from "../../images/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar" css={styles}>
      <Container>
        <div className="navbar-logo">
          <img src={PatoLogo} alt="" />
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-social">
          <div className="social">
            <i className="fab fa-tripadvisor fa-sm"></i>
            <i className="fab fa-facebook-f fa-sm"></i>
            <i className="fab fa-twitter fa-sm"></i>
          </div>
          <div className="navbar-bars">
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  border-top: 5px solid #ec1d25;
  padding: 26px 0;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0));
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-logo {
      max-width: 150px;
      cursor: pointer;
      img {
        width: 100%;
        display: block;
      }
    }
    .navbar-items {
      ul {
        display: flex;
        list-style: none;
        li {
          padding: 0 14px;
          margin: 0 10px;
          font-size: 0.9rem;
          a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            transition: color 300ms ease-in-out;
            &:hover {
              color: #ec1d25;
            }
          }
        }
      }
    }
    .navbar-social {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 200px;
      i {
        color: #fff;
        padding: 0 10px;
        cursor: pointer;
        transition: color 300ms ease-in-out;
        &:hover {
          color: #ec1d25
        }
      }
      .navbar-bars {
        width: 100%;
        max-width: 28px;
        margin: 0 0 0 20px;
        height: 16px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        cursor: pointer;
        &:hover {
          span {
            background: #ec1d25;
          }
        }
        span {
          display: block;
          transition: background 300ms ease-in-out;
          width: 100%;
          height: 2px;
          background: #fff;
          &:nth-child(2) {
            margin: 0;
          }
        }
      }
    }
  }
  @media (max-width: 1212px) {
    .container {
      .navbar-items {
        display: none;
      }
      .navbar-social {
        justify-content: flex-end;
      }
    }
  }
`;

export default Navbar;
