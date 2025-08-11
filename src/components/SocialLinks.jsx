import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourgithub",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourlinkedin",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourtwitter",
    icon: <FaTwitter />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SocialLinks() {
  return (
    <motion.div
      className="flex justify-center md:justify-start gap-8 mt-6 text-gray-700 dark:text-gray-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ name, href, icon }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          variants={itemVariants}
        >
          {icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
