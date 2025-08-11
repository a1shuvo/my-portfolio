import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "project/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
