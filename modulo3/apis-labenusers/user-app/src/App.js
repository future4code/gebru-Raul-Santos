import React from 'react'
import SignUpScreen from './Componentes/SingUpScreen'
import UsersListScreen from './Componentes/UsersListScreen'

class App extends React.Component {
  state = {
    renderedScreen: 'signUp'
  }

  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'signUp':
        return <SignUpScreen goToUsersListScreen={this.goToUsersListScreen} />
      case 'usersList':
        return <UsersListScreen goToSignUpScreen={this.goToSignUpScreen} />
      default:
        return <h2>Erro! Página não encontrada!</h2>
    }
  }

  goToSignUpScreen = () => {
    this.setState({ renderedScreen: 'signUp' })
  }

  goToUsersListScreen = () => {
    this.setState({ renderedScreen: 'usersList' })
  }

  render() {
    return (
      <div>
        <h1>LabenUsers - Gebru</h1>
        {this.chooseScreen()}
      </div>
    )
  }
}

export default App
