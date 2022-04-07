import React from "react";
import styled from "styled-components";

function Input() {
  return (
    <InputContainer>
      <input type="text" placeholder="Search Pokemon" />
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  > input {
    width:70%;
    outline: none;
    border-radius: 5px;
    border: 2px solid black;
    height : 25px;
    font-family: 'Roboto', sans-serif;
    ::placeholder{
        padding-left: 5px;
        font-family: 'Roboto', sans-serif;
    }
  }
`;
