import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;900&display=swap');
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 90px;
  margin: 2rem 3.6rem 4rem;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
  font-weight: 200;
  font-size: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <Heading>Fruit Emporium</Heading>
      <Navbar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Navbar>
    </Nav>
  );
};

export default Header;