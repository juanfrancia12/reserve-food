import { Navigate, Outlet } from "react-router-dom"

type Props = {
  isAllowed: boolean
  redirectTo?: string
  children?: any
}

// JSX.Element | JSX.Element[]

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/login",
  children,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }

  return children ? children : <Outlet />
}
