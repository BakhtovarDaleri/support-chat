// import Info from "./components/Info/Info";

import React from "react";
import MenuSection from "./components/MenuSection/MenuSection";
import SupportSection from "./components/SupportSection/SupportSection";
import ChatSection from "./components/ChatSection/ChatSection";
function App() {
  return (
    <div>
      <section className="chat">
        <div className="container">
          <MenuSection />
          <SupportSection />
          <ChatSection />
        </div>
      </section>
    </div>
  );
}

export default App;
