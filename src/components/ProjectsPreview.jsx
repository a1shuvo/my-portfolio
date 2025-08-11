import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 },
  },
};

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-tr from-indigo-50 to-white min-h-[75vh] px-4 sm:px-6 md:px-10 lg:px-16 py-14"
    >
      {/* Section Heading */}
      <div className="flex justify-center mb-16">
        <h2 className="relative text-indigo-700 text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-max pb-3 cursor-default select-none">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 rounded-full animate-underline" />
        </h2>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-8 max-w-7xl mx-auto 
                   grid-cols-1 
                   sm:grid-cols-1 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="will-change-transform flex"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
