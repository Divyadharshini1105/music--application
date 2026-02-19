import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/routes";
import AuthContentApi from "./context/AuthContentApi";
import FetchUserContext from "./context/FetchUserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <AuthContentApi>
            <FetchUserContext>
            <RouterProvider router={myRoutes} />
            </FetchUserContext>
        </AuthContentApi>
 </>
);