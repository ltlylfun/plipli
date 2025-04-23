import "./mainLayout.css";

import { Outlet } from "react-router";
import LeftBar from "../../components/leftBar/leftBar";
import TopBar from "../../components/topBar/topBar";

const Layout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="main">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
