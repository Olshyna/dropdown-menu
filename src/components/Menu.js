import React, { useState, useEffect } from "react";

import CheckboxItem from "./CheckboxItem";
import RadioItem from "./RadioItem";

function Menu() {
  const [data, setData] = useState([]);
  const [closed, setClosed] = useState(true);

  const handleToggleCheckbox = () => {
    setClosed(!closed);
  };

  const getData = () => {
    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setData(json);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="menu">
      {data && data.length > 0 ? (
        <CheckboxItem
          title={data[0].title}
          id={data[0].id}
          closed={handleToggleCheckbox}
        />
      ) : (
        `Sorry, something went wrong...`
      )}
    </div>
  );
}
export default Menu;
