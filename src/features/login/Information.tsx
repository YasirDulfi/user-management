import React from "react";
import styled from "styled-components";
import playersImg from "assets/foutball-players.jpg";

const Information = () => {
  return (
    <Container>
      <Title>Titulo</Title>
      <Description>Descripcion....</Description>
      <Image />
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  height: 100%;
  background: url(${playersImg}) no-repeat center center;
  background-size: cover;
`;
const Title = styled.h1``;
const Description = styled.h3``;
const Image = styled.img``;
export default Information;
