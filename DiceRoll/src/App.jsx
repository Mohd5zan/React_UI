import React from "react";
import StartGame from "./components/StartGame";
import { useState } from "react";
import Gameplay from "./Gameplay";

const App = () => {
  const [check, setcheck] = useState(false);
  const toggle=()=>{
    setcheck((prev) => !prev);
  }
  return(
    <>
    { 
      check ? <Gameplay/> : <StartGame toggle={toggle} />
    }
    
    </>
  );
};

export default App;
