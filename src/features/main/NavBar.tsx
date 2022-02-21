import React, { useState } from "react";
import styled from "styled-components";
import LaLiga from "assets/laliga-logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Container>
      <LaLigaLogo src={LaLiga} />
      <User onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen && <UserLogout>Logout</UserLogout>}
      </User>
    </Container>
  );
};
export default NavBar;

const Container = styled.nav`
  height: auto;
  max-width: 100vw;
  padding: 15px 30px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #3d3d3d;
`;
const LaLigaLogo = styled.img`
  height: auto;
  width: 150px;
`;
const User = styled.button`
  background: url("https://reqres.in/img/faces/10-image.jpg") no-repeat center
    center;
  background-size: cover;
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const UserLogout = styled.button`
  position: absolute;
  top: 75px;
  right: 30px;
  width: auto;
  height: auto;
  padding: 10px 30px;
  background-color: tomato;
  overflow: hidden;
`;
