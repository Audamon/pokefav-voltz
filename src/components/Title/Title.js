import React from 'react'
import styled from 'styled-components';

function Title({title}) {
  return (
    <TitleContainer>
        <h1>{title}</h1>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div`
    color: #000000;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    text-align: center;
`;