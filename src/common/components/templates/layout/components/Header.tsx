import { NavLink } from "react-router-dom"

const classActive = "text-red-500"
const classInactive = "text-blue-500"

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            Landing public
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app-preview"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            App Preview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food/create"
            className={({ isActive }) =>
              isActive ? classActive : classInactive
            }
          >
            FOOD CREATE
          </NavLink>
        </li>
      </ul>
      {/* {DATA_USER_BACKEND ? (
    <button
      onClick={() => console.log("LOGOUT")}
      className="m-4 p-2 bg-red-200 font-bold"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => console.log("LOGIN")}
      className="m-4 p-2 bg-red-200 font-bold"
    >
      Login
    </button>
  )} */}
    </nav>
  )
}

export default Header
