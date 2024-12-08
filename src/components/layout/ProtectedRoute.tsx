import { ReactNode } from "react"
import { selectCurrentToken } from "../../redux/features/auth/authSlice"
import { useAppSelector } from "../../redux/hook"
import { Navigate } from "react-router-dom"

type ProtectedRouteProps = {
 children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
 const token = useAppSelector(selectCurrentToken);
 if (!token) {
  return <Navigate to="/auth/login" replace={true} />
 }
 return children;
}

export default ProtectedRoute

