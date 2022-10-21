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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/preview" element={<PreviewApp />} />
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
      <div className="container mx-auto px-2 grid place-content-center h-full">
        <div className="m-auto flex flex-col items-center justify-center gap-12">
          <div className="w-40">
            <img src={UNAC_logo} alt="UNAC logo" className="w-full h-full" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100 text-center">
            OFICINA DE BIENESTAR UNIVERSITARIO
          </h1>
        </div>
      </div>
    </section>
  )
}

/*
  <header className="w-full h-16 border-b border-grey-100">
    <div className="h-full container mx-auto px-2 flex items-center justify-between">
      <div className="flex gap-12">
        <NavLink label={"AUTOPRO"} url={`/`} isTitle={true} />
        <Nav />
      </div>
      <div>options</div>
    </div>
  </header>
*/
