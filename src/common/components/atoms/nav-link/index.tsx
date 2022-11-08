import { NavLink as NavLinkRouter } from "react-router-dom"

type Props = {
  classActive: string
  classInactive: string
  classIcon?: string
  name: string
  href: string
  icon?: JSX.Element
}

const NavLink = ({
  classActive,
  classInactive,
  href,
  name,
  icon,
  classIcon,
}: Props) => {
  return (
    <NavLinkRouter
      to={href}
      className={({ isActive }) => (isActive ? classActive : classInactive)}
    >
      <span className={classIcon}>{icon}</span>
      {name}
    </NavLinkRouter>
  )
}

export default NavLink
