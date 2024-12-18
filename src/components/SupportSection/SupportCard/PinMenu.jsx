import React from "react";
import "./PinMenu.css";

const PinMenu = ({ isPinned, onPin, onUnpin }) => {
  return (
    <div className="pin-button">
      <img src="..." alt="Меню" />
      <div className="pin-menu">
        {!isPinned ? (
          <button onClick={onPin}>Закрепить чат</button>
        ) : (
          <button onClick={onUnpin}>Открепить чат</button>
        )}
      </div>
    </div>
  );
};

export default PinMenu;
