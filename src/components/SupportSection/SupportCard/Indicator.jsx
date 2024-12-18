const Indicator = ({ isActive, isRead, onClick }) => {
  if (isRead) return null; // Не рендерим точку, если сообщение прочитано

  return (
    <span
      className={`indicator ${isActive ? "active-indicator" : ""}`}
      onClick={onClick} // функция нажатия на точку
      style={{ cursor: "pointer" }}
    ></span>
  );
};

export default Indicator;
