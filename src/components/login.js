import React from "react"
import FacebookLogin from "react-facebook-login"

const Login = ({ onLogin }) => {
  const responseFacebook = response => {
    if (!response) {
      onLogin(false)
    }
    if (response.id) {
      onLogin(true, response)
    }
  }
  return(
    <FacebookLogin
<<<<<<< HEAD
      appId="620898128511817"
=======
      appId="2941789695875677"
>>>>>>> 11e0d2cd5cba61cb6e9112dfaf0566a15c45b370
      autoLoad={false}
      fields="name,email,picture"
      onClick={onLogin}
      callback={responseFacebook}
  />
  )
}


export default Login;