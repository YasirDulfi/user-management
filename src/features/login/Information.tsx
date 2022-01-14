import React from "react";
import styled from "styled-components";

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
  background-color: black;
`;
const Title = styled.h1``;
const Description = styled.h3``;
const Image = styled.img``;
export default Information;
