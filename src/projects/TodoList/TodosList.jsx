import React, { Component } from "react";
import TodoListItem from "./TodoListItem"

export const TodosList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.map((d, i) => {
        return <TodoListItem key={i} itemName={d} itemId={i+1} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};
