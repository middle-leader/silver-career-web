import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header/Header"; // default import

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
