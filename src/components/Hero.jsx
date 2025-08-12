import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Abstract Background Blob */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[450px] h-[450px] rounded-full filter blur-3xl opacity-30 z-0 bg-gradient-to-tr from-indigo-300 via-purple-400 to-pink-400"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
          translateX: [0, 15, 0],
          translateY: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl text-center md:text-left space-y-6">
          <motion.p
            className="text-gray-700 font-medium tracking-wide uppercase fira-font"
            variants={itemVariants}
          >
            Hello, I am
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
            variants={itemVariants}
          >
            Shuvo Saha
          </motion.h1>

          {/* Animated Title */}
          <motion.h2
            className="text-indigo-600 text-3xl md:text-4xl font-semibold h-12"
            variants={itemVariants}
            aria-live="polite"
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "React Enthusiast",
                "UI/UX Aficionado",
                "MERN Stack Explorer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={itemVariants}
          >
            I create minimalistic, user-friendly websites that deliver
            exceptional performance and intuitive user experiences.
          </motion.p>

          <SocialLinks />

          <motion.a
            href="/resume.pdf"
            download
            className="mt-2 inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            variants={itemVariants}
            aria-label="Download Resume"
          >
            <HiDownload className="w-6 h-6" aria-hidden="true" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Right Photo Section */}
        <ProfilePhoto />
      </motion.div>
    </section>
  );
}
