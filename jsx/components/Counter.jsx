import React, { useState } from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
const StyledLabel = styled.div`
  margin: 8px 0;
  font-size: 20px;
  font-wight: bold;
  text-align: center;
  width: 180px;
`;
const StyledButton = styled.button`
  background: #26b297;
  border: 0;
  border-radius: 40px;
  color: #fff;
  font-size: 13px;
  height: 36px;
  line-height: 13px;
  width: 180px;
`;
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledRoot>
      <div>
        <StyledLabel>Count: {count}</StyledLabel>
        <StyledButton onClick={() => setCount(count + 1)}>
          Count Up
        </StyledButton>
      </div>
    </StyledRoot>
  );
};
export default Counter;
