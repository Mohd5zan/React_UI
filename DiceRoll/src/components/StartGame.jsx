import React from "react";
import styled from "styled-components";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  width: 220px;
  height: 44px;
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 18px;
  padding-bottom: 10px;
  padding-left: 18px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  cursor:pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
