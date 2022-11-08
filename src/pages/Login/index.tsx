import UNAC_OBU from "@assets/UNAC-OBU.webp"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nav = useNavigate()

  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // console.log(`EMAIL: ${email} y PASSWORD: ${password}`)
    nav("/home")
  }

  return (
    <section className="w-full min-h-screen">
      <div className="md:container md:mx-auto md:px-2 2xl:px-40 flex flex-col gap-4 md:flex-row md:h-screen">
        <div className="md:my-auto md:w-1/2">
          <img
            src={UNAC_OBU}
            alt="UNAC logo"
            className="w-auto h-auto rounded-md"
          />
        </div>
        <div className="md:my-auto md:w-1/2 py-4 px-4 md:px-2 flex flex-col gap-6 md:gap-8">
          <div className="font-size--30 font-bold text-center">
            Iniciar sesión
          </div>
          <form
            className="flex flex-col gap-8 md:gap-10"
            onSubmit={(e) => OnSubmit(e)}
          >
            <div className="">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Escribe tu usuario"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-3 w-full border text-gray-600 border-gray-500/50 rounded-md focus:text-gray-700 focus:bg-white focus:border-primary-300 focus:outline-none placeholder-gray-600/70"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Escribe tu contraseña"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-5 py-3 w-full border text-gray-600 border-gray-500/50 rounded-md focus:text-gray-700 focus:bg-white focus:border-primary-300 focus:outline-none placeholder-gray-600/70"
                />
              </label>
            </div>
            <input
              type="submit"
              className="rounded-md px-5 py-3 text-center transition-colors duration-300 bg-primary-300 text-gray-100 font-semibold cursor-pointer hover:bg-primary-400"
              value={"INGRESAR"}
            />
          </form>
          <div className="text-center">
            <Link to={"/recuperation"}>¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="text-center">
            ¿No tienes cuenta? <Link to={"/register"}>Registrate</Link>
          </div>
          <button className="w-max m-auto text-primary-300 border border-primary-300 px-5 py-2 text-center rounded-md">
            CONTINUAR CON GOOGLE
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
