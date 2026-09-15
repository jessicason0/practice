import React, { useState } from "react";
import "./component.css";

const answer = "sunil";

function Component() {
  const [userInput, setUserInput] = useState("");
  const [userGuess, setUserGuess] = useState([]);

  function handleSubmit() {
    const guesses = [];

    if (userInput.length !== 5) return;

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === userInput[i]) {
        guesses.push({ letter: userInput[i], color: "green" });
      } else if (answer.includes(userInput[i])) {
        guesses.push({ letter: userInput[i], color: "yellow" });
      } else if (answer[i] !== userInput[i]) {
        guesses.push({ letter: userInput[i], color: "red" });
      }
    }

    setUserGuess(guesses);
    setUserInput("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        {userGuess.map((item, idx) => {
          return (
            <div key={idx}>
              <div style={{ color: item.color }}>{item.letter}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Component;
