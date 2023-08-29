import { Outlet } from "react-router-dom"
import Sidebar from "../blocks/Sidebar"

const Layout = () => {
  return(
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout;