import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Video from "./pages/Video.jsx";
// import Menu from "./Components/menu.jsx";
// import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "video",
//         element: <Video />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="" element={<Menu />} />
      <Route path="" element={<Navbar />} /> */}
      <Route path="" element={<Home />} />
      <Route path="video">
        <Route path=":id" element={<Video />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
