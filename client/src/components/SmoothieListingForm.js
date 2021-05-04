import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
  <div className="container">
      <div className="form">
          <label>Smoothie's name:</label>
          <input type="text" placeholder="name"/>
      </div>    
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