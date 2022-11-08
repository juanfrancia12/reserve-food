import { ProtectedRoute } from "./ProtectedRoute"
import UNAC_OBU from "@assets/UNAC-OBU.webp"
import { lazy, Suspense, useState } from "react"
import { GoogleLogin } from "react-google-login"
import {
  isUser,
  isUser_food_create,
  isUser_food_edit,
  isUser_obu_manager,
  isUser_professor,
  isUser_student,
} from "@data/user"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

const Layout = lazy(() => import("@components/templates/layout"))
const AppPreviewPage = lazy(() => import("@pages/AppPreview"))
const AboutPage = lazy(() => import("@pages/About"))
const HomePage = lazy(() => import("@pages/Home"))
const Error404 = lazy(() => import("@pages/Error/404"))
const LoginPage = lazy(() => import("@pages/Login"))
const UnauthorizedPage = lazy(() => import("@pages/Error/403"))
const SearchPage = lazy(() => import("@pages/Search"))
const ReservePage = lazy(() => import("@pages/Reserve"))

export function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<AppPreviewPage />}>
        <Layout>
          <Suspense fallback={<div>CARGANDO ....</div>}>
            <Routes>
              // ??? RUTAS PUBLICAS
              {/* <Route index element={<div>Landing Page (Public)</div>} /> */}
              <Route index element={<HomePage />} />
              <Route path="/app-preview" element={<AppPreviewPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/reserve" element={<ReservePage />} />
              <Route path="/error-404" element={<Error404 />} />
              <Route path="/error-403" element={<UnauthorizedPage />} />
              // ??? RUTAS PRIVADAS PARA TODOS LOS USUARIOS
              <Route element={<ProtectedRoute isAllowed={isUser} />}>
                {/* <Route path="/home" element={<HomePage />} /> */}
                <Route path="/profile" element={<div>PROFILE PAGE</div>} />
                <Route
                  path="/history"
                  element={<div>HISTORIAS DEL USUARIO PAGE</div>}
                />
                <Route
                  path="/suggestions"
                  element={
                    <div>TODAS LAS SUGERENCIAS DEL ESTUDIANTE O DOCENTE</div>
                  }
                />
                <Route
                  path="/dashboard"
                  element={<div>Dashboard (Private)</div>}
                />
              </Route>
              // ??? RUTAS PRIVADAS DE ACUERDO AL PERMISO DEL USUARIO
              <Route
                path="/food/create"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={isUser_food_create}
                  >
                    <div className="">
                      USUARIO (Private & permission 'crear')
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/food/edit"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={isUser_food_edit}
                  >
                    <div className="">
                      Profile (Private & permission 'editar')
                    </div>
                  </ProtectedRoute>
                }
              />
              // ??? RUTAS PRIVADAS DE ACUERDO AL ROL DEL USUARIO
              <Route
                path="/admin"
                element={
                  <ProtectedRoute redirectTo="/home" isAllowed={isUser_student}>
                    <div className="">
                      Admin (Private & permission 'estudiante')
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={isUser_professor}
                  >
                    <div className="">
                      Admin (Private & permission 'docente')
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    redirectTo="/home"
                    isAllowed={isUser_obu_manager}
                  >
                    <div className="">
                      Admin (Private & permission 'encargado-obu')
                    </div>
                  </ProtectedRoute>
                }
              />
              {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
              // ??? RUTA PUBLICA
              <Route path="/404" element={<Error404 />} />
              <Route path="*" element={<Navigate to={"/404"} replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </Suspense>
    </Router>
  )
}

const responseGoogle = (response: any) => {
  console.log(response)
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isMsgError, setIsMsgError] = useState(false)

  const OnSubmit = (e: any) => {
    e.preventDefault()

    if ((email || password) === "") {
      setIsMsgError(true)
      return
    }

    alert(`${email} - ${password}`)
    // console.log(email)
    // console.log(password)
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
                  // required
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
                  // required
                  id="password"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            {isMsgError && <div>Ingrese sus datos para iniciar sesión</div>}
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
