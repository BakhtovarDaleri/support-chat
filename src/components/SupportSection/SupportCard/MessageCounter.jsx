import React from "react";
import "./MessageCounter.css";

const MessageCounter = ({ count }) => (
  <div className="new__message">{count}</div>
);

export default MessageCounter;
