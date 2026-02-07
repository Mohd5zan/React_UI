import React from "react";
import styled from "styled-components";
const RollDice = ({dice,rolldice}) => {
 
  return (
    <DiceCont>
      <div className="dice" onClick={rolldice}>
        <img src={`/images/dice/dice_${dice}.png`} alt="Dice img" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceCont>
  );
};

export default RollDice;
const DiceCont = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
