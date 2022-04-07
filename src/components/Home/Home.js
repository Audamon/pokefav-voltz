import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';



function Home({display, setDisplay}) {
   
    const navigate = useNavigate();

    const handleButton = (e) => {
        e.preventDefault();
        setDisplay('none');
        navigate('/fire');
    }
  return (
    <HomeContainer>
       <Button display={display} onClick={handleButton} >Choose your Favorites pokemons!</Button>
        <Outlet />
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
    background-color: white;
    height: 90%;
    width: 60%;
    border-radius: 5px;
    box-shadow:0 5px 10px rgba(0, 0, 0, 0.24), 0 5px 10px rgba(0, 0, 0, 0.24);
    display: flex;
    @media(max-width: 800px){
      width: 100%;
    }
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    margin: 0 auto;
    margin-top: 25%;
    display: ${props => props.display};
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.24);
    background-color: #ef5350;
    color: white;
`;