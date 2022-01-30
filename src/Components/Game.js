import React, { useState } from "react";
import { calculateWinner } from "./Helper";
import Board from "./Board";

const Game = () => {
  const [gameArray, setGameArray] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(gameArray);
  const Xo = xIsNext ? "X" : "O";

  const handleClick = (index) => {
    if (winner || gameArray[index]) return;

    gameArray[index] = Xo;
    setGameArray([...gameArray]);
    setStepNumber((prev) => prev + 1);

    setXIsNext(!xIsNext);
  };

  const resetButton = () => {
    setGameArray(Array(9).fill(null));
    setStepNumber(0);
  };

  return (
    <>
      {winner || stepNumber >= 9 ? (
        <>
          <div className="layout">
            <h4> {winner ? `${winner} : Won` : `NoWinner`} </h4>
            <button className="resetButton" onClick={resetButton}>
              {" "}
              RESTART
            </button>
          </div>
        </>
      ) : (
        <>
          <Board squares={gameArray} onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Game;
