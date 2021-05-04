import React from "react";
// import styled from "styled-components";
import Background from "./Background"
import styled from "styled-components";

const Homepage = () => {
  return (
  <Wrapper>
      <Background />
      <TextContainer>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </TextContainer>

      <TextContainer>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
      </TextContainer>
      
  </Wrapper>

  );
};

//STYLES

const Wrapper = styled.div`
`;
const TextContainer = styled.div`
position: relative;
`;

const P = styled.p`
display: block;
margin: 50px 200px 75px auto;
word-wrap: break-word;
width: 550px;
text-align: right;
font-size: 20px;
`;


export default Homepage;