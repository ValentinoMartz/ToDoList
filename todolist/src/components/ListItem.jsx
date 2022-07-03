import React from "react";

export const ListItem = ({ id, title, handleDelete, handleSave, done }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        done ? "bg-success" : ""
      }`}
    >
      {done ? <del>{title}</del> : title}

      <div>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => handleDelete(id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button
          className="btn btn-sm btn-success"
          onClick={() => handleSave(id)}
        >
          {done ? (
            <i className="fas fa-undo-alt"></i>
          ) : (
            <i className="fas fa-check"></i>
          )}
        </button>
      </div>
    </li>
  );
};
