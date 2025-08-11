import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <div className="relative flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {/* Radial gradient halo behind */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full w-72 h-72 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 opacity-30 filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glassmorphic frosted ring */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full w-72 h-72 border-2 border-white/30 backdrop-blur-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Layered glowing rings */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full w-64 h-64 border-4 border-indigo-400 opacity-50 shadow-[0_0_15px_rgba(99,102,241,0.7)]"
        animate={{
          scale: [1, 1.07, 1],
          rotate: [0, 25, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full w-56 h-56 border-4 border-pink-400 opacity-40 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
        animate={{
          scale: [1, 0.93, 1],
          rotate: [0, -40, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Actual profile photo container */}
      <motion.div
        className="relative rounded-full overflow-hidden border-8 border-white shadow-xl shadow-indigo-600/60 aspect-square max-w-[280px]"
        animate={{
          rotateY: [0, 8, -8, 0],
          rotateX: [0, 3, -3, 0],
          y: [0, -15, 0, 10, 0],
          scale: [1, 1.05, 1.02, 1.07, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/profile.png"
          alt="Shuvo Saha"
          className="w-full h-full object-cover select-none"
          draggable={false}
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
