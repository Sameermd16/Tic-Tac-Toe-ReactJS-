import { useState, useEffect } from "react";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  // console.log(cells);
  const [winningMessage, setWinningMessage] = useState("");
  const [go, setGo] = useState("circle");
  const message = `this is ${go} turn`;

  useEffect(() => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [2, 4, 6], [0, 4, 8]
    ]
    winningCombos.forEach((array) => {
      const circleWins = array.every((item) => cells[item] === "circle")
      if(circleWins) {
        setWinningMessage("circle wins")
        return 
      }
    })
    winningCombos.forEach((array) => {
      const crossWins = array.every((item) => cells[item] === "cross")
      if(crossWins) {
        setWinningMessage("cross wins")
        return 
      }
    })
  }, [cells])


  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              go={go}
              setGo={setGo}
              cells={cells}
              setCells={setCells}
              winningMessage={winningMessage}
            />
          );
        })}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
