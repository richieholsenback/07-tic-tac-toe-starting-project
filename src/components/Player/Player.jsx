import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleNameChange = (input) => {
    setPlayerName(input.target.value);
  };

  let nameField = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    nameField = (
      <input
        className="player-input"
        value={playerName}
        onChange={handleNameChange}
        required
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
