import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function AppBlock() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default AppBlock;
