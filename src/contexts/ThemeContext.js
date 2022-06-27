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

  //add .Provider to end of the createContext() assigned variable
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}> 
      {/* the context provides all the data inside the value props to it's children */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;