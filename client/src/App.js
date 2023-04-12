import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MainContent, NavbarMenu } from "./components";

function App() {
  return (
    <div className="">
      <NavbarMenu />
      <MainContent />
    </div>
  );
}

export default App;
