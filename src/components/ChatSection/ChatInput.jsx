// import React from "react";

// const ChatInput = () => (
//   <input
//     className="chat__input"
//     placeholder="Написать сообщение..."
//     type="text"
//   />
// );

// export default ChatInput;
import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // Используем иконку стрелки отправки

const ChatInput = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      onSend(); // Отправить сообщение при нажатии Enter
    }
  };

  return (
    <div className="chat__input-container">
      <input
        type="text"
        className="chat__input"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите сообщение..."
      />
      <button className="chat__send-btn" onClick={onSend}>
        <FiSend className="send-icon" />
      </button>
    </div>
  );
};

export default ChatInput;
