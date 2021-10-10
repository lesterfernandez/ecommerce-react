import styled from "styled-components";

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background-color: #321;
    height: 70px;
    padding-right: 15px;
    img {
      height: 50px;
      width: 50px;
    }

    list-style: none;

    display: flex;
    width: 100%;

    li:nth-child(1) a {
      display: flex;
      gap: 1rem;
      font-size: 1.2rem;
      align-items: center;
      justify-content: center;
    }
    li:nth-child(1) a:hover {
      text-decoration: none;
    }

    li:nth-child(2) {
      margin-left: auto;
    }
    li {
      padding: 10px 20px;
    }

    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
