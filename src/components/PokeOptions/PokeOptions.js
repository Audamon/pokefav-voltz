import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSprite } from "../../services/Api";

function PokeOptions({
  url,
  type,
  setFavPokes,
  name,
  sprite,
  favPokes,
  isFav,
}) {
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    setPokeSprite("");
    const promise = getSprite(url);
    promise.then((res) => {
      setPokeName(res.data.name);
      setPokeSprite(res.data.sprites.front_default);
    });
  }, [url]);
  const optionColor = () => {
    if (type === "fire") {
      return "#ffbc40";
    } else if (type === "water") {
      return "#4040ff";
    } else if (type === "grass") {
      return "#00a000";
    }
  };
  const selectPokemon = (e) => {
    e.preventDefault();
    const pokeObj = {
      name: pokeName,
      url: pokeSprite,
    };
    if (favPokes.length === 3) {
      return;
    }
    if(favPokes.length === 0){
      setFavPokes([...favPokes, pokeObj]);
    }
    favPokes.forEach((fp) => {
      if (fp.name !== pokeName) {
        console.log(fp.name , pokeName)
        setFavPokes([...favPokes, pokeObj]);
      }
    });
    const arr = [];
    arr.push(pokeObj);
    
  };

  const removePokemon = (e) => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    setFavPokes(favPokes.filter((p) => p.name !== name));
  };
  return (
    <PokeOptionsContainer
      name={name || pokeName}
      isFav={isFav}
      background={optionColor}
      onClick={isFav ? removePokemon : selectPokemon}
    >
      <img
        name={name || pokeName}
        src={pokeSprite || sprite}
        alt={pokeName || name}
      />

      <h3 name={name || pokeName}>{pokeName || name}</h3>
    </PokeOptionsContainer>
  );
}
export default PokeOptions;

const PokeOptionsContainer = styled.button`
  width: ${(props) => (props.isFav ? "80%" : "40%")};
  background-color: ${(props) => props.background};
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;

  > img {
    height: 60px;
  }

  > h3 {
    font-size: 16px;
  }

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media (max-width: 800px) {
    > img {
      height: 30px;
    }

    > h3 {
      font-size: 12px;
    }
  }
`;
