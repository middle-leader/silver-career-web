import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Join from "./components/pages/Join/Join";
import Mentor from "./components/pages/Mentor/Mentor";
import Mentee from "./components/pages/Mentee/Mentee";
import MyPage from "./components/pages/MyPage/MyPage";
import "./index.css"; // Tailwind CSS 파일 import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/join", element: <Join /> },
      { path: "/mentor", element: <Mentor /> },
      { path: "/mentee", element: <Mentee /> },
      { path: "/mypage", element: <MyPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
