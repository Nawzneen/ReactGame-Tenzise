import "./App.css";
import Dice from "./Components/Dice";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(generateDice());
  // const [selectedDice, setSelectedDice] = React.useState([]);
  const [game, setGame] = React.useState(false);
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstDie = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstDie);
    if (allHeld && allSameValue) {
      setGame(true);
      console.log("you won");
    }
  }, [dice]);

  function generateDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 8);
      newArray.push({ value: randomNumber, isHeld: false, id: nanoid() });
      // console.log(newArray);
    }
    return newArray;
  }
  function start() {
    setGame(false);
    setDice(generateDice());
  }
  // Hold Each Die
  // function holdDice(id) {
  //   // console.log(id);
  //   setDice((prevDice) =>
  //     prevDice.map((die) => {
  //       return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
  //     })
  //   );
  //   console.log(dice);
  // }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const diceElement = dice.map((die) => (
    <Dice
      value={die.value}
      // id={die.id}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  // Roll the Dice Agiain
  function roll() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        const randomNumber = Math.floor(Math.random() * 8);
        return die.isHeld
          ? die
          : { value: randomNumber, isHeld: false, id: nanoid() };
      })
    );
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
      <button className={game ? "initiate hide" : "initiate"} onClick={roll}>
        Roll
      </button>
      <button className={game ? "initiate" : "initiate hide"} onClick={start}>
        Start Again
      </button>
    </div>
  );
}

export default App;
