import React from 'react'
import styled from 'styled-components';
import logo from '../../shared/namelogo.png';

function Header() {
  return (
    <HeaderContainer>
        <LogoContainer>
            <img src={logo} alt="logo" />
        </LogoContainer>

    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    background-color: #ef5350;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    > img{
       
        height: 50px;
    }

`;