import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import NavBar from "./components/Header/NavBar";
import GlobalStyles from "./GlobalStyles";
import AddSmoothieForm from "./components/AddSmoothieForm";
import ContactUs from "./components/ContactUs";
import AllSmoothie from "./components/AllSmoothie"
import SmoothieDescription from "./components/SmoothieDescription";
import Homepage from "./components/Homepage";
import ThankYou from "./components/ThankYou"
const App = () => {
  return (
    <>
    <GlobalStyles />
    <Router>
      <NavBar />
      <Switch>
        <Route path="/smoothie-information/:id">
        <SmoothieDescription />
        </Route>        
        <Route path="/AllSmoothie">       
          <AllSmoothie />
        </Route>
        <Route path="/AddSmoothieForm">        
          <AddSmoothieForm />
        </Route>
        <Route path="/ContactUs">        
          <ContactUs />
        </Route><Route path="/ThankYou" >   
        <ThankYou />       
        </Route>
        <Route path="/" >   
        <Homepage />       
        </Route>
        
      </Switch>
    </Router>
  </>
  );
};

export default App;