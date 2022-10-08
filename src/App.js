import "./App.css";
import Dice from "./Components/Dice";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(generateDice());

  function generateDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 8);
      newArray.push({ value: randomNumber, isHeld: false, id: nanoid() });
      console.log(newArray);
    }
    return newArray;
  }
  const diceElement = dice.map((die) => (
    <Dice value={die.value} key={die.id} />
  ));

  // Roll the Dice Agiain
  function roll() {
    setDice(generateDice());
  }
  // const diceArrayElements = diceArray.map((dice, index) => (
  //   <Dice key={index} value={dice} index={index} selectDice={selectDice} />
  // ));
  // Adding selected dices to an array
  // const [selectedDicesArray, setSelectedDicesArray] = React.useState([]);
  // function selectDice(event, id) {
  //   console.log(id);
  //   setSelectedDicesArray((prevDices) => [...prevDices, diceArray[id]]);
  //   console.log(selectedDicesArray);
  // }

  return (
    <div className="App">
      <main>
        <div className="box">{diceElement}</div>
      </main>
      <button className="initiate" onClick={roll}>
        Roll
      </button>
    </div>
  );
}

export default App;
