import React, { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../../services/Api";
import PokeOptions from "../PokeOptions/PokeOptions";

function Input({ favPokes, setFavPokes, setInput, input }) {
  //const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    const promise = searchPokemon(e.target.value);
    promise
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function showPokemon(pokemon) {
    if (!pokemon.name) {
      return;
    }
    setInput('')
    console.log(pokemon.sprites.front_default);
    return (
      <ShowResult>
        <PokeOptions
          sprite={pokemon.sprites.front_default}
          name={pokemon.name}
          setFavPokes={setFavPokes}
          favPokes={favPokes}
          isFav={false}
        />
      </ShowResult>
    );
  }
  return (
    <InputContainer>
      <form onSubmit={searchHandler}>
        <input
          //value={input}
          type="text"
          placeholder="Search Pokemon"
          onChange={searchHandler}
        />
        <button></button>
      </form>
      {showPokemon(pokemon)}
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
  > form {
    width: 100%;
    display: flex;
    justify-content: center;
    > button {
      opacity: 0;
    }
    > input {
      margin-left: 10px;
      width: 70%;
      outline: none;
      border-radius: 5px;
      border: 2px solid black;
      height: 25px;
      font-family: "Roboto", sans-serif;
      ::placeholder {
        padding-left: 5px;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

const ShowResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
