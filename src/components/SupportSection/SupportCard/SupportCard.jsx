import React, { useState } from "react";
import flagImage from "../../../assets/flag.svg";
import clipIcon from "../../../assets/clip.svg";
import notiesIcon from "../../../assets/noties.svg"; // Иконка для закрепления
import Indicator from "./Indicator";

const SupportCard = ({ item, handleCardClick, onPin, onUnpin }) => {
  const [isActive, setIsActive] = useState(false); // Состояние карточки
  const [showMenu, setShowMenu] = useState(false); // Видимость меню

  const handleCardSelect = () => {
    setIsActive(true);
    handleCardClick(item.id);
  };

  const handlePinCard = () => {
    onPin(item.id);
    setShowMenu(false); // Закрыть меню после действия
  };

  const handleUnpinCard = () => {
    onUnpin(item.id);
    setShowMenu(false); // Закрыть меню после действия
  };

  return (
    <div
      className={`btn__support-item ${isActive ? "active" : ""}`}
      onClick={handleCardSelect}
    >
      {/* Левая сторона с точкой и заголовками */}
      <div className="support-items">
        <Indicator isActive={isActive} isRead={item.isRead} />
        <div className="support__header">
          <h2>{item.email}</h2>
          <h3>{item.name}</h3>
        </div>
      </div>

      {/* Флаг и страна */}
      <div className="support__contry-flag">
        <img src={flagImage} alt="flag" width="20" />
        <p className="support__country">{item.country}</p>
      </div>

      {/* Статус пользователя */}
      <div className="support__status">
        {item.status === "в сети" ? (
          <span>{item.status}</span>
        ) : (
          <span>был(а) {item.lastVisit}</span>
        )}
      </div>

      {/* Количество сообщений */}
      {!isActive && item.messages > 0 && !item.isRead && (
        <div className="new__message">{item.messages}</div>
      )}

      {/* Иконка закрепления, если карточка закреплена */}
      {item.isPinned && (
        <div className="pin-icon-container">
          <img src={clipIcon} alt="Закреплено" className="pin-icon" />
        </div>
      )}

      {/* Кнопка с меню */}
      <div
        className="pin-button"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <img src={notiesIcon} alt="Меню" />

        {/* Меню, которое появляется при наведении */}
        {showMenu && (
          <div className="pin-menu">
            {!item.isPinned ? (
              <button onClick={handlePinCard}>Закрепить чат</button>
            ) : (
              <button onClick={handleUnpinCard}>Открепить чат</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportCard;
