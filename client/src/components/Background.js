import React from "react";
import background from "../assets/background.png";
import styled from "styled-components";

const Background = () => {
  return (    
      <Wrapper></Wrapper>    
  );
};

//STYLE

const Wrapper = styled.div`
position: absolute;
background-image: url(${background});
background-repeat: no-repeat;
background-attachment: fixed;
background-position: bottom left;
width: 200em;
height: 200em;

`;
export default Background;
