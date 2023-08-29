import React, { useState } from "react";

import { sample } from "../../utils";
import { MOTS } from "../../data";

import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(MOTS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = useState("running");
  const [guessList, setGuessList] = useState([]);

  const addOnetentativeGuess = (tentative) => {
    if (status === "running") {
      if (tentative === answer) setStatus("win");
      else if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED) setStatus("lose");
      const newGuessList = {
        value: tentative,
        id: `${tentative}${Math.random()}`,
      };
      setGuessList([...guessList, newGuessList]);
    }
  };

  return (
    <>
      <UserGuesses guessList={guessList} answer={answer} />
      {status === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      {status === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{guessList.length} guesses</strong>.
          </p>
        </div>
      )}
      <GuessInput addOnetentativeGuess={addOnetentativeGuess} />
    </>
  );
}

export default Game;
