import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout.jsx";
import GitHub, {
  gitHubInfoLoader,
} from "./components/HomeComponents/GitHub";

// const router = createBrowserRouter([
// {
//   path: "/",
//   element: <h1>login page</h1>,
// },
// {
//   path: "/home",
//   element: <h1>home page</h1>,
// },
// {
//   path: "/about",
//   element: <h1>about page</h1>,
// },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="home" element={<div>home page</div>}></Route>,
      <Route
        path="/github"
        loader={gitHubInfoLoader}
        element={<GitHub />}
      ></Route>
      ,<Route path="Playing" element={<div>about page</div>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
