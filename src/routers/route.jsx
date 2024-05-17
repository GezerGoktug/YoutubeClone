import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Search from "../pages/Search";
import ErrorPage from "../pages/ErrorPage";
import Category from "../pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:category", element: <Category /> },
      { path: "/detail/:id", element: <Details /> },
      { path: "/search/:searchText", element: <Search /> },
    ],
  },
]);
