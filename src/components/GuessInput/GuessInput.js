import React from "react";

function GuessInput({addOnetentativeGuess}) {
  const [guessInput, setguessInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();        
        addOnetentativeGuess(guessInput);
        setguessInput('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        onChange={(event) => {
          setguessInput(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-ZéÉ]{5}"
        title="Un mot de 5 lettre"
      />
    </form>
  );
}

export default GuessInput;
