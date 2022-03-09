import React from 'react'
import axios from 'axios'

class SignUpScreen extends React.Component {
  state = {
    nameInput: '',
    emailInput: ''
  }

  handleNameInput = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  createUser = async () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    try {
      const res = await axios.post(url, body, {
        headers: {
          Authorization: 'Raul-Santos-gebru'
        }
      })

      alert(`Usuário ${this.state.nameInput} criado com sucesso!`)
      this.setState({ nameInput: '', emailInput: '' })
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  render() {
    return (
      <div>
        <h3>Tela de Cadastro de Pessoas Usuárias</h3>
        <div>
          <input
            placeholder="Insira seu nome"
            value={this.state.nameInput}
            onChange={this.handleNameInput}
          />
          <input
            placeholder="Insira seu email"
            value={this.state.emailInput}
            onChange={this.handleEmailInput}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </div>
        <br />
        <button onClick={this.props.goToUsersListScreen}>
          Ir para Lista de Pessoas Usuárias
        </button>
      </div>
    )
  }
}

export default SignUpScreen
