import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function PokeTypeContainer({ indexType, types, setFavoritePokemons }) {
  const type = ["fire", "water", "grass"];
  const navigate = useNavigate();
  const changePkButton = (e) => {
    setFavoritePokemons([])
    navigate(`/${type[indexType]}`)
  }
  return (
    <Container>
      {types[type[indexType]].map((pokemon, index) => (
        <div key={index}>
          <img src={pokemon.url} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
      ))}
      <Button onClick={changePkButton}>Change Pokemons</Button>
    </Container>
  );
}

export default PokeTypeContainer;

const Container = styled.div`
  width: 80%;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  box-shadow:0 5px 10px rgba(0, 0, 0, 0.24), 0 5px 10px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  position: relative;;
  > div {
    display: flex;
    > img {
      height: 50px;
    }
    >h3{
        display: flex;
        align-items: center;
    }
  }
`;

const Button = styled.button`
    position: absolute;
    right: 10px;
    height: 40px;
    width: 150px;
    border: none;
    background-color: lightgray;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;

`;