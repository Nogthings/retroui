import { Outlet } from "react-router-dom";
import AppAside from "./components/app-aside/AppAside";

const Layout = () => {
  return (
    <div>
      <AppAside/>
      <Outlet/>
    </div>
  );
};

export default Layout;
