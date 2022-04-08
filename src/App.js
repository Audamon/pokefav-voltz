import "./App.css";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PokeContainer from "./components/Home/PokeContainer";
import PokeContext from "./services/context/pokeContext";
import Resume from './components/Home/Resume';
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("block");
  const [favoritePokemons, setFavoritePokemons] = useState([]);
 
  return (
    <PokeContext.Provider value={{favoritePokemons, setFavoritePokemons}}>
      <Router>
        <Header></Header>

        <PageContainer>
          <Routes>
            <Route
              path="/"
              element={<Home display={display} setDisplay={setDisplay} />}
            >
              <Route
                path="fire"
                element={
                  <PokeContainer
                    setDisplay={setDisplay}
                    type={"fire"}
                    nextType={"water"}
                    previousType={""}
                  />
                }
              />
              <Route
                path="water"
                element={
                  <PokeContainer
                    type={"water"}
                    nextType={"grass"}
                    previousType={"fire"}
                  />
                }
              />
              <Route
                path="grass"
                element={
                  <PokeContainer
                    type={"grass"}
                    nextType={"resume"}
                    previousType={"water"}
                  />
                }
              />
               <Route
                path="resume"
                element={
                  <Resume
                    previousType={"grass"}
                  />
                }
              />
            </Route>
          </Routes>
        </PageContainer>
      </Router>
    </PokeContext.Provider>
  );
}

export default App;

const PageContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images7.alphacoders.com/662/thumb-1920-662102.png");
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
