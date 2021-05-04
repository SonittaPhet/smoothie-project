import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SmoothieDescription = () => {

    const smoothie_id = window.location.href.split('/')[4];
    // console.log ("SMOOTHIE ID", smoothie_id);
    const [mounted, setMounted] = useState(true)
    const url = `http://127.0.0.1:5000/api/smoothie-information/${smoothie_id}`;
    const [smoothie, setSmoothie] = useState("");

    useEffect(() => {
        const loadData = async () => {
            const { data } = await axios.get(url);
            
            if (mounted) {
                setSmoothie(data);
            }
        };
        loadData();
        return () => [setMounted(false)];

    }, [mounted, url]);
    // console.log(smoothie)

    return (
        <Wrapper>
           
            <SingleSmoothie>
            {smoothie && <SmoothieContainer>
                <Img src={smoothie.smoothie_information.smoothieImage} />  
                <SmoothieInfo>
                <Textfield1>{`${smoothie.smoothie_information.name}`} </Textfield1>
                  <br/> 
                <Textfield2>{`${smoothie.smoothie_information.type}`}</Textfield2> 
                <br/> 
                <Textfield3>{`${smoothie.smoothie_information.ingredients}`}</Textfield3>
                </SmoothieInfo>
            </SmoothieContainer>}  
            </SingleSmoothie>   
        </Wrapper>
    )
}

//STYLE
const Wrapper = styled.div`
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

@-webkit-keyframes Wrapper {
    0% {
        min-width: 100%;
    }
    100% {
        min-width: 0;
    }
}
@keyframes Wrapper{
    0% {
        min-width: 100%;
    }
    100% {
        min-width: 0;
    }
}
`;

const SingleSmoothie = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4em;
background-color: white;
width: 50%;
margin-left: auto;
margin-right: auto;
padding-top: 50px;
padding-bottom: 50px;
`;

const SmoothieContainer = styled.div`
padding: 40px;
`;

const SmoothieInfo = styled.div`
margin-bottom: 40px;
`;

const Img = styled.img`
width: 400px;
height: 300px;
`;

const Textfield1 = styled.div`
font-size: 150%;
`;

const Textfield2 = styled.div`
width: 25em;
`;

const Textfield3 = styled.div`
width: 25em;
`;

export default SmoothieDescription;
