import NavLink from "@atoms/nav-link"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ICON_PERSON,
  ICON_SEARCH,
  ITEM_NAVLINK_HEADER,
} from "@constants/header.constant"

const classActive =
  "bg-primary-300 text-white font-bold flex items-center gap-2 py-2 px-4 border border-gray-300"
const classInactive =
  "text-primary-300 flex items-center gap-2 py-2 px-4 border border-gray-300"

const Button = () => {
  const nav = useNavigate()
  const logout = () => {
    nav("/login")
  }
  return (
    <button
      className="active:bg-red-100 text-red-500 flex items-center gap-2 py-2 px-4 border border-gray-300 cursor-pointer"
      onClick={logout}
    >
      <span className="w-5">{ICON_PERSON}</span>
      Cerrar sesion
    </button>
  )
}

const Header = () => {
  const [isToggleOptions, setIsToggleOptions] = useState(false)

  const toggleOptions = () => setIsToggleOptions(!isToggleOptions)

  return (
    <header className="w-full bg-primary-300">
      <div className="container mx-auto 2xl:px-40 flex justify-between items-center px-2 py-4 text-white relative">
        <Link to={"/"}>
          <h1 className="font-size--20 text-white">OBU</h1>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <span className="rounded-full bg-gray-300/40 cursor-pointer w-9 p-2">
            {ICON_SEARCH}
          </span>
          <span
            className="rounded-full bg-gray-300/40 cursor-pointer w-9 p-2"
            onClick={toggleOptions}
          >
            {ICON_PERSON}
          </span>
        </div>
        {isToggleOptions && (
          <div
            className="absolute top-16 right-2 min-w-[10rem] flex flex-col bg-white shadow-lg"
            onClick={toggleOptions}
          >
            {ITEM_NAVLINK_HEADER.map(({ id, name, href, icon }) => {
              return (
                <NavLink
                  key={id}
                  name={name}
                  href={href}
                  icon={icon}
                  classActive={classActive}
                  classInactive={classInactive}
                  classIcon={"w-5"}
                />
              )
            })}
            <Button />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
