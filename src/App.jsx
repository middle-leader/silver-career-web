import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/layouts/Header/Header"; // default import

function App() {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/join"]; // 헤더를 숨길 경로

  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeader && <Header />}
      <Outlet />
    </div>
  );
}

export default App;
