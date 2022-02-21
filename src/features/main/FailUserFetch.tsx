import React from "react";
import styled from "styled-components";

import ExclamationLogo from "assets/exclamation.png";

const FailUserFetch = () => {
  return (
    <FailContainer>
      <FailIMG src={ExclamationLogo} />
      <FailText>
        There was a problem loading the users! <br /> Thanks for your pattience
        ':D'
      </FailText>
    </FailContainer>
  );
};

const FailContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const FailIMG = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
`;

const FailText = styled.h1`
  font-size: 35px;
  color: red;
`;

export default FailUserFetch;
