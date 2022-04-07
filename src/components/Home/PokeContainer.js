import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "../../services/Api";
import PokeOptions from "../PokeOptions/PokeOptions";
import PokeContext from "../../services/context/pokeContext";

function PokeContainer({ type, setDisplay, nextType, previousType }) {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [favPokes, setFavPokes] = useState([]);
  const {setFavoritePokemons, favoritePokemons} = useContext(PokeContext);

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
      setFavoritePokemons([]);
    }
    const route = `/${previousType}`;
    setFavPokes([]);
    navigate(route);
  };
  const next = (e) => {
    e.preventDefault();
    const route = `/${nextType}`;
    const favObj = {};
    favObj[type] = favPokes;
    setFavoritePokemons([...favoritePokemons, favObj]);
    setFavPokes([]);
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
    {console.log(favoritePokemons)}
      <PkContainer background={pageColor}>
        <Title title={`Choose your favorite ${type} pokemons!`} />
        <Input />
        <PokeList>
          {pokemons.map((pokemon, index) => (
            <PokeOptions
              url={pokemon.pokemon.url}
              key={index}
              type={type}
              setFavPokes={setFavPokes}
              favPokes={favPokes}
              isFav={false}
            />
          ))}
        </PokeList>
      </PkContainer>
      <Vr />
      <FavContainer background={pageColor}>
        <Title title={`Favorite pokemons type-${type}`} />
        {favPokes.map((fav, index) => (
          <PokeOptions
            key={index}
            isFav={true}
            type={type}
            name={fav.name}
            sprite={fav.url}
            setFavPokes={setFavPokes}
              favPokes={favPokes}
          />
        ))}
       
        <BackButton onClick={back}>Back</BackButton>
        <FowardButton onClick={next}>Next</FowardButton>
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
  padding-bottom: 3000px;
`;

const PkContainer = styled.div`
  flex: 0.6;
  height: 100%;
  background: ${(prop) => prop.background};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  @media (max-width: 800px) {
    flex: 0.7;
  }
`;
const FavContainer = styled.div`
  flex: 0.4;
  background: ${(prop) => prop.background};
  @media (max-width: 800px) {
    flex: 0.3;
  }
`;
const Vr = styled.div`
  width: 4px;
  height: 100%;
  background-color: #b8b8b8;
`;
const FowardButton = styled.button``;
const BackButton = styled.button``;
