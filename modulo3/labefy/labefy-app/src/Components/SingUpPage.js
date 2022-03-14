import React from "react";
import axios from "axios";

class SignUpPage extends React.Component {
  state = {
    name: "",

  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailChange = event => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  handleCreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Raul-Cezar-Gebru"
      }
    };

    const body = {
      name: this.state.name,

    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`PlayList ${this.state.name} criada com sucesso!`);
        this.setState({ name: ""});
      })
      .catch(error => {
        alert("Erro ao criar PlayList");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <button onClick={this.handleCreateUser}>Criar PlayList</button>
      </div>
    );
  }
}

export default SignUpPage;
