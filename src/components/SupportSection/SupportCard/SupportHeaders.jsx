import React from "react";
import "./SupportHeader.css";

const SupportHeader = ({ email, name }) => (
  <div className="support__header">
    <h2>{email}</h2>
    <h3>{name}</h3>
  </div>
);

export default SupportHeader;
