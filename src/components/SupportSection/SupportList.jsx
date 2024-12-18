import React from "react";

const SupportList = ({ supportData }) => {
  return (
    <ul className="ul__support-list">
      {supportData.map((item, index) => (
        <li className="li__support-item" key={index}>
          <h2 className="support__mail">{item.email}</h2>
          <h3 className="support__name">{item.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SupportList;
