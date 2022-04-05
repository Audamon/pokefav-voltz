import './App.css';
import styled from 'styled-components';
import  Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
 
  return (
    <>
    <Header></Header>
    <PageContainer>
      <Home></Home>
    </PageContainer>
    </>
  );
}

export default App;


const PageContainer = styled.div`
  background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('https://images7.alphacoders.com/662/thumb-1920-662102.png');
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;