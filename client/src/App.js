import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MainContent, NavbarMenu, Footer } from "./components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState([]);
  const [footer, setFooter] = useState(null);
  const location = useLocation();
  const [loginStatus, setLoginStatus] = useState(false);
  const [role, setRole] = useState("")
  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  const roleCbHandler = (result) => {
    setRole(result)
  }
  useState(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
      if (localStorage.getItem("role") === "user") {
        setRole("user")
      } else {
        setRole("joki")
      }
    } else {
      setLoginStatus(false);
    }
  });

  useEffect(() => {
    if (
      location.pathname.indexOf("login") > -1 ||
      location.pathname.indexOf("register") > -1
    ) {
      setMenu(null);
      setFooter(null);
    } else {
      setMenu(
        <NavbarMenu loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
      );
      setFooter(<Footer />);
    }
  }, [location.pathname]);

  return (
    <div>
      {menu}
      <MainContent loginCbHandler={loginCbHandler} />
      {footer}
    </div>
  );
}

export default App;
