import React from "react";
import styled from "styled-components";


const ThankYou= () => {

  return (
    <>
      <Wrapper>Thanks for sharing your recipe!</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 300px;
font-size: 30px;
color: #ffc288
`;

export default ThankYou;
