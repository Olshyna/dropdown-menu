import React from "react";

import { FaHeart, FaBars } from "react-icons/fa";

import logo from "../img/logo.svg";

function Main({ handleToggleAside }) {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleAside()}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width="80" src={logo} alt="react logo" />
          React Dropdown Menu
        </h1>
        <p>
          Recruitment task for the position of Junior React Developer at
          Softwarely sp.z o.o.
          <br />
          The task is to create a drop-down list in two ways with any number of
          nesting.
        </p>
      </header>
      <footer>
        <small>
          &copy; 2021 made with <FaHeart style={{ color: "red" }} /> by Olga
          Shyshenina
        </small>
      </footer>
    </main>
  );
}

export default Main;
