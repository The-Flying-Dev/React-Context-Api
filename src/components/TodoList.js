import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className='ui list'>
        <p className='item'>Plan the trip</p>
        <p className='item'>Go shopping</p>
        <p className='item'>Workout</p>
      </div>
    )
  }
}

export default TodoList;