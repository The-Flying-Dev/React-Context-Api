import React from "react";
import { ThemeContext } from '../contexts/ThemeContext'; //createContext()

class TodoList extends React.Component {
  //now can consume context Data
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context; //destructure
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
      <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
        <p className='item'>Plan the trip</p>
        <p className='item'>Go shopping</p>
        <p className='item'>Workout</p>
      </div>
    )
  }
}

export default TodoList;