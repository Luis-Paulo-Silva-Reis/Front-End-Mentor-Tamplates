import React from 'react';
import Profile from './components/Profile'
import styled from 'styled-components'

const Div = styled.div`
  display:flex;
  background-color:white;
  justify-content:center;

`;


function App() {
  return (
    <Div>
      <Profile></Profile>
    </Div>
      
  );
}

export default App;
