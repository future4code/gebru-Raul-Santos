import React from "react";
import SignUpPage from "./Components/SingUpPage";
import Users from "./Components/Users";
import styled from "styled-components";




export default class App extends React.Component {
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <a1>Spotyfly</a1>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "signUp" ? <SignUpPage /> : <Users />}
      </div>
    );
  }
}

