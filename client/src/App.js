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

  useEffect(() => {
    if (
      location.pathname.indexOf("login") > -1 ||
      location.pathname.indexOf("register") > -1
    ) {
      setMenu(null);
      setFooter(null);
    } else {
      setMenu(
        <NavbarMenu />
      );
      setFooter(<Footer />);
    }
  }, [location.pathname]);

  return (
    <div>
      {menu}
      <MainContent />
      {footer}
    </div>
  );
}

export default App;
