import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let nameField = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    nameField = <input className="player-input" value={name} required />;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
