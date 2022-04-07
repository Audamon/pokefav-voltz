import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSprite } from "../../services/Api";


function PokeOptions({ url, type }) {
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeName, setPokeName] = useState("");
  useEffect(() => {
    setPokeSprite('');
    const promise = getSprite(url);
    promise.then((res) => {
      setPokeName(res.data.name)
      setPokeSprite(res.data.sprites.front_default);
    });
  }, [url]);
  const optionColor = () => {
    if (type === "fire") {
      return "#ffbc40";
    } else if (type === "water") {
      return "#4040ff";
    } else {
      return "#00a000";
    }
  };

  return (
    <PokeOptionsContainer background={optionColor}>
      <img src={pokeSprite} alt={pokeName} />

      <h3>{pokeName}</h3>
    </PokeOptionsContainer>
  );
}
export default PokeOptions;

const PokeOptionsContainer = styled.div`
  width: 35%;
  background-color: ${(props) => props.background};
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
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
