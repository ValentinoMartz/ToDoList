import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ done, del, todos }) => {
  if (todos.length <= 0) {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-primary">Todo list is empty</h1>
        <h4>Add your own todo</h4>
      </div>
    );
  }

  return (
    <div className="listWrap">
      <ul className="list-group">
        {todos &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              handleDelete={del}
              handleSave={done}
              done={todo.done}
            />
          ))}
      </ul>
    </div>
  );
};
