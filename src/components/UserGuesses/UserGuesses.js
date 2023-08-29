import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserGuesses({ guessList, answer }) {
  console.log('guessList',guessList);
    return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guess={guessList[index]?.value} answer={answer}/>
      ))}
    </div>
  );
}

export default UserGuesses;
