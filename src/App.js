import React, { useState } from "react";

import Aside from "./components/Aside";
import Main from "./components/Main";

import "./App.scss";

function App() {
  const [toggled, setToggled] = useState(false);

  const handleToggleAside = () => {
    setToggled(!toggled);
  };
  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside toggled={toggled} handleToggleAside={handleToggleAside} />
      <Main handleToggleAside={handleToggleAside} />
    </div>
  );
}

export default App;
