import { GoogleLogin, GoogleLogout } from "react-google-login"
import { useState } from "react"

const clientId =
  "1056012931140-ont9c8stsaqivhlc4iqagg8v3uqk01ea.apps.googleusercontent.com"

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
