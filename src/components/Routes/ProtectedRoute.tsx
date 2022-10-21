import { Navigate, Outlet } from "react-router-dom"

type Props = {
  isAllowed: any
  redirectTo?: any
  children?: any
}

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/landing",
  children,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }

  return children ? children : <Outlet />
}
