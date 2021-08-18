import React, { useState } from "react";

function RadioItem({ title, id }) {
  const [closed, setClosed] = useState(true);

  const handleToggleRadio = () => {
    setClosed(!closed);
  };

  return (
    <div className="radio-tree-header">
      <div className="radio-inner">
        <div
          className="radio-wrapper"
          tabIndex={0}
          role="button"
          onClick={handleToggleRadio}
        >
          <div className="radio-container">
            <input type="radio" id={id} name={`radio-${id}`} />
          </div>
        </div>
        <label for={`radio-${id}`} class="checkbox">
          {title}
        </label>
      </div>
    </div>
  );
}

export default RadioItem;
