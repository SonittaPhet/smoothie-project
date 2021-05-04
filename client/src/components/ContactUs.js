import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();
    const resetForm = () => {
      setEmail("");
      setMessage(""); 
      setSubject("");
      history.push("/");
    };
    const sendMessage = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("email", email);
      data.append("subject", subject);
      data.append("message", message);
  
      const production_url = "/api/contact";
      axios
        .post(production_url, data)
        .then((response) => {
          console.log(response);
        }, resetForm())
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (    
        <Wrapper>
        <FormContent>
            <H1>CONTACT US</H1>
            <H2>Email</H2>
          <Input
            value={email}
            type="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <H2>Subject</H2>
          <Input
            value={subject}
            type="text"
            placeholder="Enter the subject of message"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <H2>Message</H2>
          <Textarea
            value={message}
            cols="30"
            rows="5"
            placeholder="Type your message here"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
          <br />
  
          <Button onClick={sendMessage} type="submit">
            SEND MESSAGE
          </Button>
        </FormContent>
      </Wrapper>
    );
  };

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

const H1 = styled.h1`
font-size: 20px;
`;
const H2 = styled.h2`
margin-top: 1.5em;
margin-bottom: 1em;
`;

const Input = styled.input`
padding: 5px;
border: 1px solid black;
box-sizing: border-box;
width: 300px;
height: 30px;

&::placeholder {
    color: #999;
}
`;
const Textarea = styled.textarea`
width: 300px;
height: 150px;
`;

// button
const Button =styled.button`
padding: 10px;
background-color: #ffc288;
cursor: pointer;
border-color: #fea82f;

  &:hover {
    background-color: #fea82f;
    transition: ease-in-out 0.1s;
 `;

export default ContactUs;
