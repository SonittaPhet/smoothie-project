import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import styled from "styled-components";


const NavBar = () => {
  return (  
    <Div>
      <DesktopNavBar />
    </Div>  
  );
};

const Div = styled.div`
position: sticky;
padding: 10px;
top: 0;
z-index: 10;
background-color: #ffc288;


`;
export default NavBar;