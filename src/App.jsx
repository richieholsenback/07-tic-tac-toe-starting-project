import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player One"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player Two"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handlePlayerChange}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
