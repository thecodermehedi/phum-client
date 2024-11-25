import Login from "../pages/Login"
import Register from "../pages/Register"

const authPaths = [
 {
  name: "Login",
  path: "login",
  element: <Login />,
 },
 {
  name: "Register",
  path: "register",
  element: <Register />,
 },
]

export default authPaths
