import jsCookie from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

import useBodyClass from "../../hooks/useBodyClass"

export const DarkThemeContext = createContext()

export const DarkThemeProvider = ({ children }) => {
  const darkThemeEnv = process.env.NEXT_PUBLIC_DARK_THEME
  const [darkTheme, setDarkTheme] = useState(true)

  useEffect(() => {
    jsCookie.set("darkTheme", JSON.stringify(darkTheme), { expires: 365 })
  }, [darkTheme])
  useBodyClass(darkTheme, darkThemeEnv)

  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

export const useDarkThemeContext = () => useContext(DarkThemeContext)
