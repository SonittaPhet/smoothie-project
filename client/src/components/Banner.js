import React from "react";
import banner from "../assets/banner.png";
import styled from "styled-components";

const Banner = () => {
  return (
  <div>
    <Img src={banner} alt="Homepage banner"/>
  </div>
  );
};

//STYLES
const Img = styled.img` 
width: 100%;
height: 50vh;
object-fit: cover;
margin-top: 0.5em;
`;

export default Banner;