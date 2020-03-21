import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  render() {
    const { itemName, itemId, handleDelete } = this.props;
    return (
      <>
        {this.state.checked ? (
          <del onClick={this.handleClick}>
            Item number {itemId} is {itemName}
          </del>
        ) : (
          <li onClick={this.handleClick}>
            Item number {itemId} is {itemName}
          </li>
        )}
        <input
          type="button"
          value="delete"
          onClick={() => handleDelete(itemName)}
        />
      </>
    );
  }
}
