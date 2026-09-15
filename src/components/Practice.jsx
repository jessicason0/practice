import React, { useState } from "react";
import "./practice.css";

const chosenNum = 35;

const playersInfo = [
  { playerName: "Abby", playerNum: 0 },
  { playerName: "Bobby", playerNum: 0 },
  { playerName: "Catrice", playerNum: 0 },
  { playerName: "Drew", playerNum: 0 },
  { playerName: "Fiona", playerNum: 0 },
];

function Practice() {
  const [players, setPlayers] = useState(playersInfo);
  // const [chosenNum, setChosenNum] = useState(0);
  const [winningPlayer, setWinningPlayer] = useState([]);

  function handleClick() {
    // setChosenNum(Math.ceil(Math.random() * 100));

    setPlayers((prev) =>
      prev.map((item) => {
        return {
          playerName: item.playerName,
          playerNum: Math.ceil(Math.random() * 100),
        };
      }),
    );

    // let smallestDifference = 0;
    // const playerNums = players.map((num) => num.playerNum);
    // for (let i = 0; i < playerNums.length; i++) {
    //   if (Math.abs(chosenNum - playerNums[i] < smallestDifference)) {
    //     smallestDifference = Math.abs(chosenNum - playerNums[i]);
    //   }
    // }
    // console.log(smallestDifference);
  }

  return (
    <div>
      <button onClick={handleClick}>Play</button>
      <div>Closest to this number wins! --- {chosenNum}</div>
      <div>
        {players.map((item, idx) => {
          return (
            <div key={idx}>
              <div>{item.playerName}</div>
              <div>{item.playerNum}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Practice;
