import './App.css';
import styled from 'styled-components';
import  HeaderContainer from './components/Header/Header';

function App() {
 
  return (
    <>
    <HeaderContainer></HeaderContainer>
    <PageContainer>
  
    </PageContainer>
    </>
  );
}

export default App;


const PageContainer = styled.div`
  background-image: url('https://images7.alphacoders.com/662/thumb-1920-662102.png');
  height: 100%;
  width: 100%;
  display: flex;
`;