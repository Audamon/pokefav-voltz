import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "../../services/Api";
import PokeOptions from "../PokeOptions/PokeOptions";

function PokeContainer({ type, setDisplay, nextType, previousType }) {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const promise = getPokemons(type);
    promise.then((res) => {
      setPokemons(res.data.pokemon);
    });
  }, [type]);

  const back = (e) => {
    e.preventDefault();
    if (type === "fire") {
      setDisplay("block");
    }
    const route = `/${previousType}`;
    navigate(route);
  };
  const next = (e) => {
    e.preventDefault();
    const route = `/${nextType}`;
    navigate(route);
  };
  const pageColor = () => {
    if (type === "fire") {
      return "orange";
    } else if (type === "water") {
      return "blue";
    } else {
      return "green";
    }
  };
  return (
    <>
      <PkContainer background={pageColor}>
        <Title title={`Choose your favorite ${type} pokemons!`} />
        <Input />
        <PokeList>
          {pokemons.map((pokemon, index) => <PokeOptions name={pokemon.pokemon.name} url={pokemon.pokemon.url} key={index} type={type}/>
          )}
        </PokeList>
      </PkContainer>
      <Vr />
      <FavContainer background={pageColor}>
        <Title title={`Favorite pokemons type-${type}`} />
        <FowardButton onClick={next}>Next</FowardButton>
        <BackButton onClick={back}>Back</BackButton>
      </FavContainer>
    </>
  );
}

export default PokeContainer;

const PokeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin-top: 10px;
  margin-left: -20px;
  height: 100%;

 
`;

const PkContainer = styled.div`
  flex: 0.6;

  background: ${(prop) => prop.background};
  overflow-y: scroll;
  ::-webkit-scrollbar { width: 0 !important }
  @media(max-width: 800px) {
    flex:0.7;
  }
`;
const FavContainer = styled.div`
  flex: 0.4;
  background: ${(prop) => prop.background};
  @media(max-width: 800px) {
    flex:0.3;
  }
`;
const Vr = styled.div`
  width: 4px;
  height: 100%;
  background-color: #b8b8b8;
`;
const FowardButton = styled.button``;
const BackButton = styled.button``;
