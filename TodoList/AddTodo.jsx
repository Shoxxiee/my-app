import React, { Component } from "react";

export const AddTodo = ({ searchText, handleTextChange, handleSubmit }) => {
  return (
    <>
      <input type="text" placeholder="add on" value={searchText} onChange={handleTextChange} />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};
