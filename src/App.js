import "./App.css";
import Dice from "./Components/Dice";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(generateDice());

  const [game, setGame] = React.useState(false);
  const [clickedNum, setClickedNum] = React.useState(0);

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
      const randomNumber = Math.floor(Math.random() * 3);
      newArray.push({ value: randomNumber, isHeld: false, id: nanoid() });
    }
    return newArray;
  }
  function start() {
    setGame(false);
    setClickedNum(0);

    setDice(generateDice());
  }

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
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  // Roll the Dice Agiain
  function roll() {
    setClickedNum((prevClickedNum) => prevClickedNum + 1);
    setDice((prevDice) =>
      prevDice.map((die) => {
        const randomNumber = Math.floor(Math.random() * 3);
        return die.isHeld
          ? die
          : { value: randomNumber, isHeld: false, id: nanoid() };
      })
    );
  }

  return (
    <div className="App">
      <main>
        <div className="rules">
          <h1>Tenzise</h1>
          <p>Roll and select all the same numbers to win</p>
        </div>
        {game && <Confetti />}
        <div className="box">
          {" "}
          <div className={game ? "win-board" : "hide"}>
            <p>
              Congradulation, you have won with{" "}
              <span className="">{clickedNum}</span> clickes
            </p>
          </div>
          {diceElement}
        </div>
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
