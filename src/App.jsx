import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player One" symbol="X" />
          <Player initialName="Player Two" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
