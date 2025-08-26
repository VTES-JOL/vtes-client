import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {Amplify} from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Login from "./components/Login.tsx";

Amplify.configure(outputs);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {path: "login", Component: Login}
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
