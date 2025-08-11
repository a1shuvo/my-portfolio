import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.7, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-white min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden pt-16 pb-24"
      aria-label="About Me Section"
    >
      {/* Left Abstract Background Blob */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[-15%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-300 via-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-30 z-0"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
          translateX: [0, 15, 0],
          translateY: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right Glowing Blob */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-400 rounded-full filter blur-[90px] opacity-20 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          translateX: [0, -10, 0],
          translateY: [0, 10, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-600 border-b-4 border-indigo-400 pb-3 mb-10"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-900 text-base md:text-lg leading-relaxed tracking-wide mb-6 max-w-3xl"
          variants={itemVariants}
        >
          I’m a passionate Frontend Developer dedicated to crafting elegant,
          user-friendly web applications. Specializing in React and modern web
          technologies, I build performant and scalable interfaces that deliver
          real impact.
        </motion.p>

        <motion.p
          className="text-gray-800 text-base md:text-lg leading-relaxed tracking-wide mb-6 max-w-3xl"
          variants={itemVariants}
        >
          My programming journey began with curiosity and continuous learning. I
          enjoy solving problems with clean, maintainable code and crafting
          beautiful experiences.
        </motion.p>

        <motion.p
          className="text-gray-800 text-base md:text-lg leading-relaxed tracking-wide mb-6 max-w-3xl"
          variants={itemVariants}
        >
          Outside of coding, I find inspiration in gardening and reading books,
          which nurture my creativity and patience.
        </motion.p>

        <motion.p
          className="text-gray-800 text-base md:text-lg leading-relaxed tracking-wide max-w-3xl"
          variants={itemVariants}
        >
          I am eager to contribute to innovative teams and grow as a developer
          through collaboration and new challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}
