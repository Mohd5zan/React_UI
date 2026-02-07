import styled from "styled-components";
import { useState } from "react";
const NumberSelector = ({ error, selected, setselected, seterror }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const num = (value) => {
    setselected(value);
    seterror("");
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => {
          return (
            <Box sel={value === selected} onClick={() => num(value)} key={i}>
              {value}
            </Box>
          );
        })}
        {/* <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box> */}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
margin-top: 0;
/* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  // display:flex;
  // justify-content:center;
  // align-items:center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.sel ? "black" : "white")};
  color: ${(props) => (!props.sel ? "black" : "white")};
`;
