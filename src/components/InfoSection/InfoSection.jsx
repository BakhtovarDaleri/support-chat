import React from "react";
import "./InfoSection.css";
import SettingsImg from "./SettingsImg";
import LineImage from "../SupportSection/LineImage";
import Heading from "../Heading/Heading";

const Presets = () => {
  return (
    <section className="presets">
      <div className="presets__menu">
        <div className="img__settings">
          <SettingsImg className="img__presets-settings" alt="settings" />
        </div>
        <Heading level="h1" text="Пресеты" className="presets__title" />
        <div className="presets__line">
          <LineImage alt="line" />
        </div>
        <ul className="ul__presets-menu">
          <li className="li__presets-item">исп привет</li>
          <li className="li__presets-item">
            Спасибо за ваше обращение с удовольствием помогли вам
          </li>
          <li className="li__presets-item">
            Спасибо за ваше обращение с удовольствием помогли вам
          </li>
          <li className="li__presets-item">исп привет</li>
        </ul>
      </div>
    </section>
  );
};

export default Presets;
