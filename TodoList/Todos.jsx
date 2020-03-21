import React, { Component } from "react";
import { AddTodo } from "./AddTodo";
import { TodosList } from "./TodosList";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      todos: []
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit() {
    this.setState(prevState => ({
      todos: prevState.todos.concat(this.state.searchText),
      searchText: ""
    }));
  }

  handleDelete(name) {
    this.setState(prevState => ({
        todos: prevState.todos.filter(d => d !== name)
    }))
  }

  render() {
    return (
      <div>
        <AddTodo
          searchText={this.state.searchText}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit}
        />
        <TodosList todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todos;
