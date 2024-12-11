import React from "react";

function Header() {
  function createHeaderTitle() {
    return "Лайв саппорт";
  }
  return <h1>{createHeaderTitle()}</h1>;
}

export default Header;
