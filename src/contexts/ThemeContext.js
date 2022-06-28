import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    //first 
    isDarkTheme: true,
    //second
    lightTheme: {
      text: '#222',
      background: '#d8ddf1'
    },
    //third
    darkTheme: {
      text: '#fff',
      background: '#5c5c5c'
    }
  };

  //define function
  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme })
  };

  //add .Provider to end of the createContext() assigned variable
  //which ever components gets wrapped inside the .Provider component will have access to the state data
  render() {
    return (                                                       //add function to value props
      <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}> 
      {/* the context provides all the data inside the value props to it's children */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;