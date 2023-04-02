import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CustomNavbar from "../components/customNavbar";
import DetailMovie from "../pages/detailMovie";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <CustomNavbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <DetailMovie />,
      },
    ],
  },
]);

export default router;
