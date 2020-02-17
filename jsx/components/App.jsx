import React from 'react';
// import styled from 'styled-components';
import CountItem from './CountItem';
import AddNewItem from './AddNewItem';
// import img from '../../src/image.png'

// const Div = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 400px;
// `;

const App = () => (
  <div>
    {/* <h1>Hello World</h1>
        <img src={img}/> */}
    <CountItem />
    <AddNewItem />
  </div>
);
export default App;
