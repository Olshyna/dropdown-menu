import React from "react";

function CheckboxItem({ title, id, handleToggleCheckbox }) {
  return (
    <div className="checkbox-tree-header">
      <div className="checkbox-inner">
        <div className="checkbox-wrapper">
          <div
            className="checkbox-container"
            role="button"
            tabIndex={0}
            onClick={handleToggleCheckbox}
          >
            <input type="checkbox" id={id} name={`checkbox-${id}`} />
          </div>
        </div>
        <label htmlFor={`checkbox-${id}`} className="checkbox">
          {title}
        </label>
      </div>
    </div>
  );
}

export default CheckboxItem;
