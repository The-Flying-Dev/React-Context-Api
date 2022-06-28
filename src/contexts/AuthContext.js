import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {

  state = {
   isLoggedIn: false
  };
   

  //define function
  changeAuthStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  };

  //add .Provider to end of the createContext() assigned variable
  //which ever components gets wrapped inside the .Provider component will have access to the state data
  render() {
    return (                                                       //add function to value props
      <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}> 
      {/* the context provides all the data inside the value props to it's children */}
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;