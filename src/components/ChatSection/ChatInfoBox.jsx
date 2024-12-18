import React from "react";
import flagImage from "../../assets/flag.svg";
import exitImage from "../../assets/exit.svg";

const ChatInfoBox = ({ email, name, country, lastVisit }) => (
  <div className="chat__info-box">
    <p className="chat__mail">{email}</p>
    <p className="chat__name">{name}</p>
    <div className="chat__contry-flag">
      <img src={flagImage} alt="flag" />
    </div>
    <p className="chat__contry">{country}</p>
    <div className="chat__status">{lastVisit}</div>
    <div className="chat__domain"></div>
    <div className="deposite"></div>
    <div className="chat__img-exit">
      <img src={exitImage} alt="exit" />
    </div>
  </div>
);

export default ChatInfoBox;
