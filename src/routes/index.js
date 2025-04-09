import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Login from "../pages/login";
import Register from "../pages/register";
import BlogDetail from "../pages/blogDetail";
import "../style/style.scss";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Navbar />
        ),
        children: [
            {
                index: true,
                element: <Home />,
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
                path: "blog/:blogid",
                element:<BlogDetail/>
            },

        ],
    },
]);

export default routes;
