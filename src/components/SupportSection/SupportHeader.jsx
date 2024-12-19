import React, { useState, useEffect, useRef } from "react";
import "./SupportHeader.css";
import menuIcon from "../../assets/actives-noties.svg"; // Иконка меню
import infoIcon from "../../assets/noties.svg"; // Иконка подсказки
import Heading from "../Heading/Heading";

const SupportHeader = ({ handleMarkAsRead }) => {
  const [showMenu, setShowMenu] = useState(false);

  // Создаем ссылку на элемент меню
  const menuRef = useRef(null);

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false); // Скрываем меню
      }
    };

    // Добавляем слушатель событий при монтировании
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Удаляем слушатель событий при размонтировании
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Обработчик для "Пометить все как прочитанное"
  const handleMarkAllAsRead = () => {
    handleMarkAsRead(); // Вызываем переданную функцию
    setShowMenu(false); // Скрываем меню после выполнения действия
  };

  return (
    <div className="box__title">
      <Heading level="h1" text="Лайв саппорт" className="support__title" />

      {/* Кнопка для открытия меню */}
      <div className="mark-read-container" ref={menuRef}>
        <button
          className="mark-read-button"
          onClick={() => setShowMenu((prev) => !prev)} // Показать/скрыть меню
        >
          <img src={menuIcon} alt="Menu Icon" />
        </button>

        {/* Всплывающее меню */}
        {showMenu && (
          <div className="tooltip">
            <button className="tooltip-button" onClick={handleMarkAllAsRead}>
              <img src={infoIcon} alt="Info Icon" />
              Пометить все как прочитанное
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportHeader;
