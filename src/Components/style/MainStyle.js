import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
padding: 0;
margin:0;
box-sizing:border-box;
  }
   body {
    background-color: #EFF1F7;
    font-family: 'poppins', sans-serif; 
    color : #9e9aa7;
    font-size: 18px;
    font-weight: 700;
    overflow-x: hidden;
   }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 10px;
`;

export const Btn1 = styled.button`
  color: white;
  background-color: #2acfcf;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 200ms all ease-in;
  :hover {
    opacity: 0.6;
  }

  p {
    color: white;
    font-size: 18px;
    text-decoration: none;
    padding: 0 10px;
    transition: 400ms ease all;
    font-weight: 700;
  }
`;
