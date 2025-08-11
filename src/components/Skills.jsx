import { motion } from "framer-motion";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-white min-h-[65vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
      aria-label="Skills Section"
    >
      {/* Background Glow Blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[-20%] left-[-10%] w-[420px] h-[420px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-600 rounded-full filter blur-3xl opacity-25 z-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
          translateX: [0, 10, 0],
          translateY: [0, -10, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-15%] right-[-5%] w-[380px] h-[380px] bg-gradient-to-tr from-indigo-400 via-purple-600 to-pink-500 rounded-full filter blur-3xl opacity-25 z-0"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -10, 0],
          translateX: [0, -15, 0],
          translateY: [0, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.h2
        className="relative z-10 text-2xl md:text-3xl font-extrabold text-indigo-600 border-b-4 border-indigo-400 pb-3 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="relative z-10 w-full max-w-5xl flex flex-wrap gap-8 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className="relative group cursor-pointer flex flex-col items-center gap-2 w-20 sm:w-24"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            tabIndex={0}
            aria-label={name}
          >
            {/* Glow background on hover */}
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
            <div
              className="relative z-10 text-white p-4 rounded-xl shadow-lg"
              style={{ backgroundColor: color }}
              title={name}
            >
              <Icon className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>
            <span className="text-gray-700 font-medium text-sm sm:text-base select-none">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
