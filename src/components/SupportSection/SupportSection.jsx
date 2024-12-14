import React, { useState } from "react";
import "./SupportSection.css";
import activesImage from "../../assets/actives.svg";
import line1Image from "../../assets/line.png";

// Данные для карточек
const supportData = [
  { id: 1, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 2, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 3, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 4, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 5, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 6, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 7, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 8, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 9, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
  { id: 10, email: "Ldanio12@gmail.com", name: "@mamont", isRead: false },
];

const SupportSection = () => {
  const [supportItems, setSupportItems] = useState(supportData);

  const handleCardClick = (id) => {
    setSupportItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
    // Дополнительно можно открыть чат или выполнить другие действия
    console.log(`Чат для ${id} открыт`);
  };

  return (
    <section className="supports">
      <div className="support__box">
        <div className="box__title">
          <h1 className="support__title">Лайв саппорт</h1>
          <button
            className="mark-read-button"
            onClick={() =>
              console.log("Все сообщения помечены как прочитанные")
            }
          >
            Пометить все как прочитанное
          </button>
        </div>
        <input className="support__input" placeholder="поиск" type="text" />
        <div className="line__from-supports">
          <img src={line1Image} alt="line" />
        </div>
        <div className="ul__support-list">
          {supportItems.map((item) => (
            <button
              className="btn__support-item"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="support-items" key={item.id}>
                <span
                  className={`indicator ${item.isRead ? "read" : "unread"}`}
                ></span>
                <div className="support__header">
                  <h2>{item.email}</h2>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
// import React, { useState } from "react";
// import "./SupportSection.css";
// import activesImage from "../../assets/actives.svg";
// import line1Image from "../../assets/line.png";

// const supportData = [
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
//   { email: "Ldanio12@gmail.com", name: "@mamont" },
// ];

// const SupportSection = () => {
//   const [isRed, setIsRead] = useState(false);

//   const handleMarkAsRead = () => {
//     setIsRead(true);
//     console.log("Все сообщения помечены как прочитанные");
//   };
//   return (
//     <section className="supports">
//       <div className="support__box">
//         <div className="box__title">
//           <h1 className="support__title">Лайв саппорт</h1>
//           <button className="mark-read-button" onClick={handleMarkAsRead}>
//             *
//           </button>
//         </div>
//         <input className="support__input" placeholder="поиск" type="text" />
//         <div className="line__from-supports">
//           <img src={line1Image} alt="line" />
//         </div>
//         <ul className="ul__support-list">
//           {supportData.map((item, index) => (
//             <li className="li__support-item" key={index}>
//               <h2 className="support__mail">{item.email}</h2>
//               <h3 className="support__name">{item.name}</h3>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default SupportSection;
