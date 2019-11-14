import React from 'react';
import './LoginForm.css';

function LoginForm (props) {
  const { change } = props

  const submitHandler = (event) => {
    event.preventDefault()
    const Username = event.target[0].value
    const password = event.target[1].value

    console.log(`The username: ${Username}, and the password: ${password}`)
  }

  return (
    <form className="form-content" onSubmit={submitHandler}>
        <input type="text" placeholder="Username" onChange={change} /><br/>
        <input type="password" placeholder="Password" onChange={change} /><br/>
        <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;