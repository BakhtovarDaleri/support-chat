// import React from "react";

// const SupportInput = () => {
//   return <input className="support__input" placeholder="поиск" type="text" />;
// };

// export default SupportInput;

import React from "react";

const SupportInput = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      className="support__input"
      placeholder="Поиск"
      type="text"
      onChange={handleInputChange}
    />
  );
};

export default SupportInput;
