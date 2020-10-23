import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MailBody from "./MailBody";
import Events from "./Events";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="app__container__sideBar">
          <Sidebar />
        </div>
        <div className="app__container__Mail">
          <MailBody />
        </div>
          <Events />
      </div>
    </div>
  );
}

export default App;
