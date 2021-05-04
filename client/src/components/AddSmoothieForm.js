import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

const AddSmoothieForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [smoothieImage, setSmoothieImage] = useState(null);
    const history = useHistory();
    const resetForm = () => {
        setName("");
        setType(""); 
        setIngredients("");
        setSmoothieImage("");
        history.push("/ThankYou");
      };

    const listSmoothie = () => { 
        const url = "/api/smoothieListing";

        const data = new FormData();

        data.append("name", name);    
        data.append("type", type);
        data.append("ingredients", ingredients);
        data.append("smoothieImage", smoothieImage);

        axios
         .post(url, data)
         .then(response => {
            console.log(response.data);
        }, resetForm())
        .catch(error => 
            console.log(error))
    }
      
    return (
        <Wrapper>
            <FormContent>
                <div><h1>
                    SHARE YOUR SMOOTHIE'S RECIPE
                </h1></div>
                <H2>Smoothie's name</H2>
                <Input type="text" 
                placeholder="Name of your smoothie"
                onChange={(e) => setName(e.target.value)}
                />

                <H2>Type</H2>
                <Select onChange={(e) => setType(e.target.value)}>
                    <option>...</option>
                    <option>Fruits</option>
                    <option>Veggies</option>
                </Select>

                <H2>Ingredients</H2>
                <Input2 type="text" 
                placeholder="The ingredients"
                onChange={(e) => setIngredients(e.target.value)}
                />

                <H2>Image</H2>               
                <input type="file" onChange={(e) => setSmoothieImage(e.target.files[0])} />

                <Footer>
                    <Div>
                    <Button type="submit" onClick={listSmoothie}>SHARE</Button>
                    </Div>
                </Footer>
            </FormContent>            
        </Wrapper>
    )
}

//STYLING
const Wrapper = styled.div``;

const FormContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4em;
background-color: #ffc288;
width: 50%;
margin-left: auto;
margin-right: auto;
padding-top: 50px;
padding-bottom: 50px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
border-radius: 999px;
border: 1px solid black;
box-sizing: border-box;
height: 35px;
width: 35%;

&::placeholder {
    color: #999;
}
`;

const Input2 = styled.input`
border-radius: 999px;
border: 1px solid black;
box-sizing: border-box;
height: 55px;
width: 35%;

&::placeholder {
    color: #999;
}
`;

const Select = styled.select`
margin-bottom: 1.5em;
`;

const H2 = styled.h2`
margin-top: 1.5em;
margin-bottom: 1em;

`;

// button
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

const Button =styled.button`
 margin-top: 20px; 
 height: 40px;
 width: 100px;
 border: none;
 border-radius: 999px;
 background-color: black;
 font-weight: bold;
 color: white;
 cursor: pointer;

  &:hover {
    background-color: lightgrey;
    transition: ease-in-out 0.2s;
 `;
export default AddSmoothieForm;