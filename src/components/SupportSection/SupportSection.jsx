import React, { useState } from "react";
import "./SupportSection.css";
import SupportHeader from "./SupportHeader";
import SupportInput from "./SupportInput";
import SupportCard from "./SupportCard/SupportCard";
import LineImage from "./LineImage";
import supportData from "../../data/SupportData";
import ChatSection from "../ChatSection/ChatSection"; // Импортируем ChatSection

const SupportSection = () => {
  const [supportItems, setSupportItems] = useState(supportData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(null); // Состояние для выбранной карточки

  //Логика поиска
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  //Логика пометки  сообщений как прочитанных
  const handleMarkAsRead = () => {
    setSupportItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        messages: 0,
        isRead: true,
      }))
    );
    console.log("Все сообщения помечены как прочитанные");
  };

  //Логика выбора карточки
  const handleCardClick = (id) => {
    const selectedItem = supportItems.find((item) => item.id === id);
    setSelectedChat(selectedItem); // Обновляем состояние выбранной карточки
  };

  //Логика закрепления карточки
  const handlePinCard = (id) => {
    const pinnedCount = supportItems.filter((item) => item.isPinned).length;

    if (pinnedCount < 3) {
      setSupportItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, isPinned: true } : item
        )
      );
    } else {
      alert("Вы можете закрепить не более 3 чатов.");
    }
  };

  //Логика снятия закрпеления с карточки
  const handleUnpinCard = (id) => {
    setSupportItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isPinned: false } : item
      )
    );
  };

  //Сортировка и фильтрация
  const sortedItems = [...supportItems].sort((a, b) => b.isPinned - a.isPinned);

  const filteredItems = sortedItems.filter(
    (item) =>
      item.email.toLowerCase().includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="supports">
      <div className="support__box">
        <SupportHeader handleMarkAsRead={handleMarkAsRead} />
        <SupportInput onSearch={handleSearch} />
        <LineImage />
        <div className="ul__support-list">
          {filteredItems.map((item) => (
            <SupportCard
              key={item.id}
              item={item}
              handleCardClick={handleCardClick}
              onPin={handlePinCard}
              onUnpin={handleUnpinCard}
            />
          ))}
        </div>
      </div>

      {/* Добавим ChatSection, передав в него выбранный чат */}
      <div className="chat__section">
        <ChatSection selectedChat={selectedChat} />
      </div>
    </section>
  );
};

export default SupportSection;
