import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player One" symbol="X" />
          <Player name="Player Two" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
