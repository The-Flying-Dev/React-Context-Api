import React from "react";
import { ThemeContext } from '../contexts/ThemeContext'; //createContext()

class TodoList extends React.Component {
  //now can consume context Data
  static contextType = ThemeContext;

  render() {                                     //destruct function
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context; //destructure
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
      <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
        <p className='item'>Plan the trip</p>
        <p className='item'>Go shopping</p>
        <p className='item'>Workout</p>       {/* call function */}
        <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
      </div>
    )
  }
}

export default TodoList;