import { Button, Layout } from "antd";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/featues/auth/authSlice";

const Navbar = () => {
 const dispatch = useAppDispatch();
 const handleLogout = () => {
  dispatch(logout());
 }
 return (
  <Layout.Header className="flex justify-end items-center px-4">
   <Button onClick={handleLogout} className="font-bold text-base">Logout</Button>
  </Layout.Header>
 )
}

export default Navbar

