// import React from "react";
// import ChatInfoBox from "./ChatInfoBox";
// import ChatInput from "./ChatInput";
// import LineFromChat from "./LineFromChat";
// import "./ChatSection.css";

// const ChatSection = ({ selectedChat }) => {
//   if (!selectedChat) {
//     return <div className="chat__placeholder">Выберите чат</div>;
//   }

//   return (
//     <section className="chat__menu">
//       <div className="chat__box">
//         {!selectedChat ? (
//           <div>Выберите чат</div>
//         ) : (
//           <ChatInfoBox
//             email={selectedChat.email}
//             name={selectedChat.name}
//             country={selectedChat.country}
//             lastVisit={selectedChat.lastVisit}
//           />
//         )}
//         <LineFromChat />
//         <div className="chat__user-one">tggt</div>
//         <div className="chat__user-two">gttggt</div>
//         <ChatInput />
//       </div>
//     </section>
//   );
// };

// export default ChatSection;
import React, { useState } from "react";
import ChatInfoBox from "./ChatInfoBox";
import ChatInput from "./ChatInput";
import LineFromChat from "./LineFromChat";
import "./ChatSection.css";

const ChatSection = ({ selectedChat }) => {
  // Состояние для сообщений, ключ - это ID чата
  const [messages, setMessages] = useState({
    1: [{ sender: "user1", text: "Привет, как дела?" }],
    2: [{ sender: "user2", text: "Здравствуйте!" }],
  });

  const [newMessage, setNewMessage] = useState(""); // Состояние для нового сообщения

  // Функция для отправки сообщения
  const sendMessage = () => {
    if (newMessage.trim() === "") return; // Если сообщение пустое, не отправляем

    const updatedMessages = [
      ...messages[selectedChat.id],
      { sender: "me", text: newMessage },
    ];
    setMessages({ ...messages, [selectedChat.id]: updatedMessages });
    setNewMessage(""); // Очистить поле ввода после отправки
  };

  if (!selectedChat) {
    return <div className="chat__placeholder">Выберите чат</div>;
  }

  return (
    <section className="chat__menu">
      <div className="chat__box">
        <ChatInfoBox
          email={selectedChat.email}
          name={selectedChat.name}
          country={selectedChat.country}
          lastVisit={selectedChat.lastVisit}
        />
        <LineFromChat />

        {/* Отображение сообщений */}
        <div className="chat__messages">
          {messages[selectedChat.id]?.map((message, index) => (
            <div
              key={index}
              className={`chat__message ${
                message.sender === "me"
                  ? "chat__message--me"
                  : "chat__message--other"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Ввод сообщения */}
        <ChatInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onSend={sendMessage}
        />
      </div>
    </section>
  );
};

export default ChatSection;
