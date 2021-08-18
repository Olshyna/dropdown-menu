import React from "react";
import classNames from "classnames";

import Menu from "./Menu";

import image from "../img/bg-image.jpg";

function Aside({ toggled, handleToggleAside }) {
  return (
    <div className={classNames("aside", { toggled })}>
      <div className="aside-inner">
        <img src={image} alt="aside background" />
        <div className="aside-layout">
          <header>dropdown menu</header>
          <Menu />
          <footer>recruitment task</footer>
        </div>
      </div>
      <div
        className="overlay"
        onClick={handleToggleAside}
        role="button"
        tabIndex={0}
        aria-label="overlay"
      />
    </div>
  );
}

export default Aside;
