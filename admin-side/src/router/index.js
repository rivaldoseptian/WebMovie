import React from "react";
import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import CustomNavbar from "../component/CustomNavbar";
import FormGenre from "../component/genreform";
import CreateMovie from "../pages/creatMovie";
import Genre from "../pages/Genre";
import Home from "../pages/Home";
import Login from "../pages/loginForm";
import MovieEdit from "../pages/movieEdit";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <CustomNavbar />
        <Outlet />
      </div>
    ),
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addmovie",
        element: <CreateMovie />,
      },
      {
        path: "genre",
        element: <Genre />,
      },
      {
        path: "creategenre",
        element: <FormGenre />,
      },
      {
        path: "editmovie/:id",
        element: <MovieEdit />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
