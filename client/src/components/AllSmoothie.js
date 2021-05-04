import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { allSmoothieAction } from "../store/Actions/SmoothieFetchAction";
import { Link } from "react-router-dom";
import screenLoader from "../assets/screenLoad.gif";
const AllSmoothie = () => {
 
    const { loading, error, smoothieList } = useSelector(
      (state) => state.smoothieList
    );
    const dispatch = useDispatch();

  
    useEffect(() => {
      dispatch(allSmoothieAction());
      
    }, [dispatch]);

  return (
    
    <SmoothiesListContainer>
      {loading ? (
        <Loader src={screenLoader} alt="fetching-data" className="loadingScreen" />
      ) : error ?(
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) :(
        <Container>
          <H1>ALL SMOOTHIES</H1>
          <ListedSmoothie>
            {smoothieList.map((smoothie) => {
              return(
                <SmoothieDetails key={smoothie._id}>
                  <ImgContainer>
                  <Link to={`/smoothie-information/${smoothie._id}`}>
                    <Img src={smoothie.smoothie_information.smoothieImage} alt="SMOOTHIE'S IMAGE"/>
                  </Link>
                  </ImgContainer>
                  <SmoothieInfo>
                  <Textfield1>{`${smoothie.smoothie_information.name}`} </Textfield1>
                  <br/> 
                <Textfield2>{`${smoothie.smoothie_information.type}`}</Textfield2> 
                <br/> 
                <Textfield3>{`${smoothie.smoothie_information.ingredients}`}</Textfield3>
                  </SmoothieInfo>
                </SmoothieDetails>
              )
            })}
          </ListedSmoothie>
        </Container>
      )
    }
    </SmoothiesListContainer>
        
  
  );
};

//change textfield
//STYLES


const SmoothiesListContainer = styled.div``;

const Container = styled.div ``;


const ListedSmoothie = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 20px;
margin-top: 10px;
`;

const SmoothieDetails = styled.div ``;

const ImgContainer = styled.div `
margin-bottom: 10px;
`;

const Img = styled.img`
width: 400px;
height: 300px;
`;

const H1 = styled.h1`
margin-top: 50px;
padding: 20px;
margin-left: 85px;
font-weight: 700;
font-size: 150%;
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

const SmoothieInfo = styled.div`
margin-bottom: 40px;
`;

const Loader = styled.img`
width: 24px;
height: 24px;
`;

export default AllSmoothie;