import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Buttons";
import { OutlineButton } from "../styled/Buttons";
import Rules from "./Rules";
const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selected, setselected] = useState();
  const [dice, setdice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setshowRules] = useState(false);
  const generateRand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolldice = () => {
    if (!selected) {
      seterror("You have not selected anynumber");
      return;
    }
    seterror("");
    let randomNumber = generateRand(1, 7);
    setdice((prev) => randomNumber);
    if (selected === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setselected(undefined);
  };
  const ResetScore = () => {
    setscore((prev) => 0);
  };
  return (
    <MainCont>
      <div className="top_sec">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selected={selected}
          seterror={seterror}
          setselected={setselected}
        />
      </div>
      <RollDice dice={dice} rolldice={rolldice} />
      <div className="btns">
        <OutlineButton onClick={ResetScore}>Reset</OutlineButton>
        <Button onClick={()=>setshowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainCont>
  );
};

export default Gameplay;

const MainCont = styled.div` 
  padding-top: 10px;
  .top_sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
