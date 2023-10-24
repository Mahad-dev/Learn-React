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
import GitHub from "./components/HomeComponents/GitHub";
import TestPage from "./pages/Playing";
import UseEffectHook from "./components/LayoutComponents/UseEffectHook";
import SlideToUnlock from "./components/SlideToUnlock";
import TestingProps from "./components/Props";
import NumberInput from "./components/NumberInput";
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
      <Route path="github" element={<GitHub />}></Route>,
      <Route path="Play" element={<TestPage />}></Route>,
      <Route path="useeffect" element={<UseEffectHook />}></Route>
      <Route path="slide-to-unlock" element={<SlideToUnlock />}></Route>
      <Route path="testing-props" element={<TestingProps />}></Route>
      <Route path="number-input" element={<NumberInput />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
