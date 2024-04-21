import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import Appointments from "./pages/Appointments";
import History from "./pages/History";
import SignUp from "./pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
  {
    path: "sigin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
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
