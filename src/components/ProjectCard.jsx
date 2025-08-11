import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { HiExternalLink, HiOutlineCode } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer group flex flex-col h-full"
      style={{ perspective: 1200 }}
    >
      {/* Image Container */}
      <div
        className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-60 overflow-hidden rounded-t-3xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full object-cover absolute top-0 left-0 will-change-transform"
          style={{ width: "100%", height: "auto" }}
          animate={isHovered ? { y: "-40%" } : { y: 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
          draggable={false}
          loading="lazy"
        />
        {/* Overlay Glow on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-t-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.4), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-6 lg:p-5 xl:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 truncate">
          {project.title}
        </h3>

        <p className="text-gray-700 text-sm sm:text-base flex-grow line-clamp-3 mb-5">
          {project.summary}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto flex-wrap justify-between">
          <Link
            to={`/project/${project.slug}`}
            className="flex-1 min-w-[110px] text-center px-3 py-2 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base font-semibold shadow-md"
            aria-label={`View details for ${project.title}`}
          >
            View Details
          </Link>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[110px] text-center px-3 py-2 sm:px-4 sm:py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition text-sm sm:text-base font-semibold flex items-center justify-center gap-1 sm:gap-2"
            aria-label={`Visit live site for ${project.title}`}
          >
            Live <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[110px] text-center px-3 py-2 sm:px-4 sm:py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition text-sm sm:text-base font-semibold flex items-center justify-center gap-1 sm:gap-2"
            aria-label={`View GitHub repo for ${project.title}`}
          >
            GitHub <HiOutlineCode className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
