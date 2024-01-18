import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./components/Dashboard";
import reportWebVitals from "./reportWebVitals";
import {loader as tasksLoader} from "./components/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/dashboard",
      element: <Dashboard />,
      loader: tasksLoader
    }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
