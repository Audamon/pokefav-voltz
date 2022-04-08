import React, { useContext } from "react";
import styled from "styled-components";
import PokeContext from "../../services/context/pokeContext";
import Title from "../Title/Title";
import Container from "./PokeTypeContainer";

function Resume() {
  const { favoritePokemons, setFavoritePokemons } = useContext(PokeContext);
  return (
    <ResumeContainer>
      <Title title={"My favorite pokemons are"} />
      {favoritePokemons.map((types, indexType) =>  <Container key={indexType} types={types} indexType={indexType} setFavoritePokemons={setFavoritePokemons}/> )}
    </ResumeContainer>
  );
}

export default Resume;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  height: fit-content;
`;

