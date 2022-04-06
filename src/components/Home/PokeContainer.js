import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";

function PokeContainer({ type, setDisplay, nextType, previousType }) {
  const navigate = useNavigate();

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
    if (type === 'fire'){
      return 'orange';
    }
    else if (type === 'water') {
      return 'blue';
    } else{
      return 'green';
    }
  }
  return (
    <>
      <PkContainer background={pageColor}>
        <Title title={`Choose your favorite ${type} pokemons!`} />
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

const PkContainer = styled.div`
  flex: 0.6;
  background: ${prop => prop.background};
`;
const FavContainer = styled.div`
  flex: 0.4;
  background: ${prop => prop.background};
`;
const Vr = styled.div`
  width: 4px;
  height: 100%;
  background-color: #b8b8b8;
`;
const FowardButton = styled.button``;
const BackButton = styled.button``;
