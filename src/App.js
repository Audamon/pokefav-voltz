import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PokeContainer from "./components/Home/PokeContainer";
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('block');
  return (
    <Router>
      <Header></Header>

      <PageContainer>
        <Routes>
          <Route path="/" element={<Home display={display} setDisplay={setDisplay} />}>
            <Route path="fire" element={<PokeContainer setDisplay={setDisplay} type={"fire"} nextType={'water'} previousType={''}/>} />
            <Route path="water" element={<PokeContainer  type={"water"} nextType={'plant'} previousType={'fire'}/>} />
            <Route path="plant" element={<PokeContainer  type={"plant"} nextType={'fire'} previousType={'water'}/>} />
          </Route>
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;

const PageContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images7.alphacoders.com/662/thumb-1920-662102.png");
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
