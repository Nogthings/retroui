import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
        Este es el layout
        <Outlet/>
    </div>
  )
}
