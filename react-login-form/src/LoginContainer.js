import React from 'react';
import './LoginContainer.css';
import LoginForm  from './LoginForm/LoginForm';

class LoginContainer extends React.Component {

  InputsOfTheUser = (event) => {
    event.preventDefault()
    console.log(`${event.target.value}`)
  }
  render() {
    return (
      <LoginForm change={this.InputsOfTheUser} />
    )
  }
}

export default LoginContainer;
