import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player One" symbol="X" />
          <Player initialName="Player Two" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
