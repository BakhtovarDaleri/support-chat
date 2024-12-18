// import React from "react";
// import ChatInfoBox from "./ChatInfoBox";
// import ChatInput from "./ChatInput";
// import LineFromChat from "./LineFromChat";
// import "./ChatSection.css";

// const ChatSection = ({ selectedChat }) => {
//   // Принял selectedChat как проп
//   if (!selectedChat) {
//     return <div>Выберите чат для отображения информации.</div>;
//   }

//   return (
//     <section className="chat__menu">
//       <div className="chat__box">
//         <ChatInfoBox
//           email={selectedChat.email}
//           name={selectedChat.name}
//           country={selectedChat.country}
//           lastVisit={selectedChat.lastVisit}
//         />
//         <LineFromChat />
//         <div className="chat__user-one">tggt</div>
//         <div className="chat__user-two">gttggt</div>
//         <ChatInput />
//       </div>
//     </section>
//   );
// };

// export default ChatSection;
import React from "react";
import ChatInfoBox from "./ChatInfoBox";
import ChatInput from "./ChatInput";
import LineFromChat from "./LineFromChat";
import "./ChatSection.css";

const ChatSection = ({ selectedChat }) => {
  // if (!selectedChat) {
  //   return <div className="chat__placeholder">Выберите чат</div>;
  // }

  return (
    <section className="chat__menu">
      <div className="chat__box">
        {!selectedChat ? (
          <div>Выберите чат</div>
        ) : (
          <ChatInfoBox
            email={selectedChat.email}
            name={selectedChat.name}
            country={selectedChat.country}
            lastVisit={selectedChat.lastVisit}
          />
        )}
        <LineFromChat />
        <div className="chat__user-one">tggt</div>
        <div className="chat__user-two">gttggt</div>
        <ChatInput />
      </div>
    </section>
  );
};

export default ChatSection;
