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
  const [input, setInput] = useState("");
  const { setFavoritePokemons, favoritePokemons } = useContext(PokeContext);

  useEffect(() => {
    setFavPokes([]);
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
    if (favPokes.length < 3) {
      alert("escolha os seus 3 pokemons favoritos");
      return;
    }
    setFavoritePokemons([...favoritePokemons, favObj]);
    setFavPokes([]);
    setInput('');
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
  const buttonColor = () => {
    if (type === "fire") {
      return "#ffbc40";
    } else if (type === "water") {
      return "#4040ff";
    } else if (type === "grass") {
      return "#00a000";
    }
  };

  return (
    <>
      <PkContainer background={pageColor}>
        <Title title={`Choose your favorite ${type} pokemons!`} />
        <Input setFavPokes={setFavPokes} favPokes={favPokes} setInput={setInput} input={input}/>
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
      <Vr background={buttonColor} />
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
        <ButtonsContainer>
          <BackButton background={buttonColor} onClick={back}>
            Back
          </BackButton>
          <FowardButton background={buttonColor} onClick={next}>
            Next
          </FowardButton>
        </ButtonsContainer>
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
  //height: 100%;
  padding-bottom: 50px;
  height: fit-content;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

const PkContainer = styled.div`
  flex: 0.6;
  height: 100%;
  background: ${(prop) => prop.background};
  overflow-y: scroll;
  border-radius: 5px 0 0 5px;
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
  position: relative;
  border-radius: 0 5px 5px 0;
  @media (max-width: 800px) {
    flex: 0.3;
  }
`;
const Vr = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${(props) => props.background};
`;
const FowardButton = styled.button`
  border: none;
  background-color: ${(props) => props.background};
  width: 100px;
  height: 40px;
  margin-left: 35px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const BackButton = styled.button`
  border: none;
  background-color: ${(props) => props.background};
  width: 100px;
  height: 40px;
  margin-left: 35px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
