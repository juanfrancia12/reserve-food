import { lazy, Suspense, useState } from "react"
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"

import UNAC_logo from "../../assets/UNAC-logo.webp"
import UNAC_OBU from "../../assets/UNAC-OBU.webp"

import { GoogleLogin } from "react-google-login"
import LoginGoogle from "./LoginGoogle"

const HomePage = lazy(() => import("../Pages/Home"))
const LoginPage = lazy(() => import("../Pages/Login"))

const USER = {
  id: 1,
  name: "John",
  permissions: ["analize"],
  roles: ["admin"],
}
interface USERTYPE {
  id: number
  name: string
  permissions: string[]
  roles: string[]
}

/*
DESPUES DE PREVIEW APP

 {user ? (
        <button onClick={logout} className="m-4 p-2 bg-red-200 font-bold">
          Logout
        </button>
      ) : (
        <button onClick={login} className="m-4 p-2 bg-red-200 font-bold">
          Login
        </button>
      )}
*/

export function AppRoutes() {
  const [user, setUser] = useState<null | USERTYPE>(null)

  const login = () => setUser(USER)
  const logout = () => setUser(null)

  return (
    <Router>
      {/* <Navigation /> */}

      <Suspense fallback={<div>CARGANDO ....</div>}>
        <Routes>
          <Route index element={<div>Landing Page (Public)</div>} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/preview" element={<PreviewApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-google" element={<LoginGoogle />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<div>Dashboard (Private)</div>} />
          </Route>
          <Route
            path="/analytics"
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={!!user && USER.permissions.includes("analize")}
              >
                <div className="">Profile (Private & permission 'analize')</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={!!user && USER.roles.includes("admin")}
              >
                <div className="">Admin (Private & permission 'admin')</div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

const PreviewApp = () => {
  return (
    <section className="w-full h-screen bg-primary-300">
      <div className="h-full flex flex-col items-center justify-center gap-12 container-section">
        <div className="w-40">
          <img src={UNAC_logo} alt="UNAC logo" className="w-full h-full" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-100 text-center">
          OFICINA DE BIENESTAR UNIVERSITARIO
        </h1>
      </div>
    </section>
  )
}

const responseGoogle = (response: any) => {
  console.log(response)
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const OnSubmit = (e: any) => {
    e.preventDefault()

    console.log(email)
    console.log(password)
  }
  return (
    <section className="w-full">
      <div className="min-h-screen grid md:grid-cols-2 gap-8 md:gap-20 container-section">
        <div className="m-auto">
          <img
            src={UNAC_OBU}
            alt="UNAC logo"
            className="w-auto h-auto rounded-md"
          />
        </div>
        <div className="w-full m-auto flex flex-col gap-8 border border-gray-300 bg-white p-8 rounded-md">
          <p className="text-xl md:text-2xl font-bold text-center">
            INICIAR SESIÓN
          </p>
          <form className="form" onSubmit={(e) => OnSubmit(e)}>
            <div className="form__item">
              <label htmlFor="email">
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  placeholder="Escribe tu usuario"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form__item">
              <label htmlFor="password">
                <input
                  type="password"
                  required
                  id="password"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" className="button full" value={"INGRESAR"} />
          </form>
          <div className="flex flex-col gap-4 text-primary-500 text-center">
            <p>¿Olvidaste tu contraseña?</p>
            <p className="text-black">
              ¿No tienes cuenta?{" "}
              <span className="text-primary-500">Registrate</span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <span>O</span>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div className="m-auto ">
            <GoogleLogin
              clientId="1056012931140-92mjikpnru3qg407bjr4u5jugoid992e.apps.googleusercontent.com"
              buttonText="CONTINUAR CON GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
