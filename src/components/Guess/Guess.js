import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  console.log("guess before check", guess);

  const cssLetterStatus = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={
            cssLetterStatus ? cssLetterStatus[index].letter : undefined
          }
          status={
            cssLetterStatus ? cssLetterStatus[index].status : undefined
          }
        />
      ))}
    </p>
  );
}

export default Guess;
