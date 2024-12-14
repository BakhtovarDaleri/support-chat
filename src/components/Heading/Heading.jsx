import React from "react";
import "./Heading.css";

function Heading(props) {
  const className = props.className ? props.className : "";

  if (props.level === "h1") {
    return <h1 className={`heading-h1 ${className}`}>{props.text}</h1>;
  }
  if (props.level === "h2") {
    return <h2 className={`heading-h2 ${className}`}>{props.text}</h2>;
  }

  return null; // Если level не h1 или h2, то ничего не рендерится
}

export default Heading;
