import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DesktopNavBar = () => {
  return (
  <Wrapper>
      <ul>
      <NavLink activeStyle={{ textDecoration: "underline", color: "white", }} exact to="/">      
      <li>
      <GiFruitBowl size={55}/>      
      </li>
      </NavLink>
      <NavItems>
      <NavLink activeStyle={{ color: "white"}} exact to="/AllSmoothie"><li>All Smoothies</li></NavLink >      
      <NavLink activeStyle={{ color: "white"}} exact to="/AddSmoothieForm"><li>Add your Smoothie</li></NavLink >
      <NavLink activeStyle={{ color: "white"}} exact to="/ContactUs"><li>Contact Us</li></NavLink >
      </NavItems>          
              
      </ul>
  </Wrapper>
  );
};

//STYLES

const Wrapper = styled.div`
margin: 0 auto;
width: 95vw;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  }
  li {
    list-style-type: none;
    color: white;
  }
  li:hover {
    color: #fea82f;
    text-decoration-thickness: 1px;
  }
  
`;

const NavItems = styled.div`
display: flex;
  margin-left: -150px;
  font-size: 40px;

  li {
    margin: 0px 10px;
    font-size: 0.9em;
  }`;

export default DesktopNavBar;
