import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const ProjectLayout = () => (
  <section className="flex flex-col min-h-screen bg-base-100 text-gray-900">
    <Navbar />

    {/* Nested routes rendered here */}
    <Outlet />
  </section>
);

export default ProjectLayout;
