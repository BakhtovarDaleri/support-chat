import React from "react";
import Menu from "./components/Menu/Menu";
import LiveSupport from "./components/LiveSupport/LiveSupport";
import Chat from "./components/Chat/Chat";
import Info from "./components/Info/Info";

function App() {
  return (
    <div>
      <Menu />
      <LiveSupport />
      <Chat />
      <Info />
    </div>
  );
}

export default App;
