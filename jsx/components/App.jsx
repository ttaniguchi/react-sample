import React from 'react';
import CountItem from './CountItem';
import styled from 'styled-components';
//import AddNewItem from './AddNewItem';
//import img from '../../src/image.png'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

const App  = () => (
      <Div>
        {/* <h1>Hello World</h1>
        <img src={img}/> */}
        <CountItem />
        {/* <AddNewItem/>  */}
      </Div>
  )
export default App 


