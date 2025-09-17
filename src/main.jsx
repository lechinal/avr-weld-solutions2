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
const LegalPages = lazy(() => import("./pages/LegalPages.jsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.jsx"));
const GDPR = lazy(() => import("./pages/GDPR.jsx"));

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
          path: "privacy-policy",
          element: <LegalPages />,
        },
        {
          path: "terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "gdpr",
          element: <GDPR />,
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
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
