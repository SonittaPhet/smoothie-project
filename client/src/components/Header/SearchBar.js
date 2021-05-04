import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchBar = () => {
    return (
        <Wrapper>
            <Fields>
            </Fields>
            <SearchInput>
                <input type="text" placeholder="Search"/>
                <BsSearch style={{ padding: "2px" }}/>
            </SearchInput>                         
        </Wrapper>
    );
};

//display: flex;
// flex-direction: column;
// align-items: center;
// margin-top: 2em;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-left: 43em;
`;

const Fields = styled.div`
margin-bottom: 2px;
`;

const SearchInput = styled.div`
display: flex; 
margin-bottom: 2px;
align-items: center;
border-radius: 999px;
border: 2px solid lightgrey;
padding: 0.5em 1.5em;

input {
border: 0;
outline: none;
font-weight: bolder;
}
`;

export default SearchBar;