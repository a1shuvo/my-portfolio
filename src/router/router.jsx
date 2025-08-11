import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";
import ProjectLayout from "../layouts/ProjectLayout";
import ProjectDetails from "../pages/ProjectDetails";

const Home = lazy(() => import("../pages/Home"));
const ProjectsPreview = lazy(() => import("../components/ProjectsPreview"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "project",
    element: (
      <Suspense fallback={<Loading />}>
        <ProjectLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <ProjectsPreview />,
      },
      {
        path: ":id",
        element: <ProjectDetails />,
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
