import logo from "./logo.svg";
import "./App.css";
import Dice from "./Components/Dice";
import React from "react";

function App() {
  const [diceArray, setDiceArray] = React.useState([]);
  function generateDice() {
    setDiceArray([]);
    console.log("before", diceArray);
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 9);
      setDiceArray((prevDiceArray) => [...prevDiceArray, randomNumber]);
      console.log("1");
      console.log("after", diceArray);
    }
    console.log("end of function", diceArray);
  }
  function stating() {
    console.log(diceArray);
  }
  const diceArrayElements = diceArray.map((dice, index) => (
    <Dice key={index} value={dice} />
  ));
  return (
    <div className="App">
      <main>
        <div className="box">{diceArrayElements}</div>
      </main>
      <button className="initiate" onClick={generateDice}>
        Start
      </button>
    </div>
  );
}

export default App;
