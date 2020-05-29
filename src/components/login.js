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
      appId="2941789695875677"
      autoLoad={false}
      fields="name,email,picture"
      onClick={onLogin}
      callback={responseFacebook}
  />
  )
}


export default Login;