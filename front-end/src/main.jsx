import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { register } from "swiper/element/bundle";
register();

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import GlobalStateProvider from "./Hooks/GlobalStateProvider";
import BlogPage from "./Pages/Blog/BlogPage";
import FourOFour from "./Components/FourOFour/FourOFour";
import BlogDetailsPage from "./Pages/Blog/BlogDetailsPage";
import NewBlog from "./Pages/Blog/NewBlog";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Shop from "./Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <FourOFour />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "/blog/create",
        element: <NewBlog />,
      },
      {
        path: "/about-us",
        element: <ComingSoon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);
