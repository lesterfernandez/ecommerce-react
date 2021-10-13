import styled from "styled-components";

const Nav = styled.nav`
  ul {
    flex-direction: column;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background-color: #321;
    list-style: none;
    display: flex;
    width: 100%;

    img {
      height: 50px;
      width: 50px;
    }

    li {
      padding: 5px;
      position: relative;
      span {
        background-color: #44e;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        text-align: center;
        font-size: 1rem;
        position: absolute;
        right: -25px;
        bottom: 5px;
      }
    }

    li:nth-child(1) a {
      display: flex;
      gap: 1rem;
      font-size: 1.2rem;
      align-items: center;
      justify-content: center;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
  @media (min-width: 650px) {
    ul {
      flex-direction: row;
      padding-right: 15px;
      height: 70px;

      li {
        padding: 10px 20px;
        span {
          top: 0;
          right: -5px;
        }
      }

      li:nth-child(2) {
        margin-left: auto;
      }

      a:hover {
        text-decoration: underline;
      }

      li:nth-child(1) a:hover {
        text-decoration: none;
      }
    }
  }
`;

export default Nav;
