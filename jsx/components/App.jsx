import React from 'react';
import CountItem from './CountItem';
import AddNewItem from './AddNewItem';
/* CL-3038のImageを貼り付けるコード
import styled from 'styled-components';
import img from '../../src/image.png'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
 `; */

const App = () => (
  <div>
    {/* CL-3038のImageを貼り付けるコード
    <h1>Hello World</h1>
    <img src={img}/> */}
    <CountItem />
    <AddNewItem />
  </div>
);
export default App;
