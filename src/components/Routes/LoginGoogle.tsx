import React, { useState } from "react"
import { GoogleLogin, GoogleLogout } from "react-google-login"

const clientId =
  "1056012931140-hf6npofjt486maof685c4peg6rq70qjh.apps.googleusercontent.com"

function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)
  const onLoginSuccess = (res: any) => {
    console.log("LoginGoogle Success:", res.profileObj)
    setShowloginButton(false)
    setShowlogoutButton(true)
  }

  const onLoginFailure = (res: any) => {
    console.log("LoginGoogle Failed:", res)
  }

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully")
    console.clear()
    setShowloginButton(true)
    setShowlogoutButton(false)
  }

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  )
}
export default LoginGoogle
