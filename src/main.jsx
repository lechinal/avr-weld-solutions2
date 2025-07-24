import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Loader from "./components/layout/Loader/Loader.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Details = lazy(() => import("./pages/ProjectsDetails.jsx"));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },

        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "details/:id",
          element: <Details />,
        },
      ],
    },
  ],
  {
    basename: "/avr-weld-solutions2", // Adjust this if your app is hosted in a subdirectory
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
