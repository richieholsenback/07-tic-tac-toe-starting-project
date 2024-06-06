import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const handleSquareClick = (rowIndex, colIndex) => {
    setGameBoard((prevBoard) => {
      let newBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      newBoard[rowIndex][colIndex] = activePlayer;
      return newBoard;
    });
    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
