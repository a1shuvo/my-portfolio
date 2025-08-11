import { motion } from "framer-motion";
import { HiAcademicCap, HiBookOpen, HiUserGroup } from "react-icons/hi";

const educationData = [
  {
    level: "B.Sc.",
    institution: "Daffodil International University",
    major: "Multimedia and Creative Technology",
    cgpa: "3.76 / 4.00",
    year: "Graduated",
    icon: <HiAcademicCap className="w-6 h-6" aria-hidden="true" />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    level: "H.S.C",
    institution: "Saheed Syed Nazrul Islam College",
    major: "Business Studies",
    cgpa: "4.40 / 5.00",
    icon: <HiBookOpen className="w-6 h-6" aria-hidden="true" />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    level: "S.S.C",
    institution: "Phulpur Pilot High School",
    major: "Science",
    cgpa: "4.94 / 5.00",
    icon: <HiUserGroup className="w-6 h-6" aria-hidden="true" />,
    color: "from-indigo-500 to-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-white min-h-[60vh] px-6 md:px-12 lg:px-20 py-14"
      aria-labelledby="education-heading"
    >
      <motion.h2
        id="education-heading"
        className="text-indigo-600 text-4xl md:text-5xl font-extrabold text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={containerVariants}
      >
        <span className="inline-block border-b-4 border-indigo-400 pb-2">
          Education
        </span>
      </motion.h2>

      <motion.div
        className="relative max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* Vertical gradient timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-600 z-0" />

        {/* Timeline items */}
        <div className="flex flex-col space-y-8 md:space-y-4">
          {educationData.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={itemVariants}
              >
                {/* Content card */}
                <div
                  className={`bg-white shadow-xl rounded-lg p-6 w-full max-w-md md:max-w-sm z-10 border border-gray-200 ${
                    isLeft ? "md:ml-10 text-left" : "md:mr-10 text-right"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.level}
                  </h3>
                  <p className="mt-1 text-indigo-600 font-semibold">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-gray-700">{item.major}</p>
                  <p className="mt-1 text-gray-600 font-medium">
                    CGPA: {item.cgpa}
                  </p>
                  {item.year && (
                    <p className="mt-1 text-gray-500 italic">{item.year}</p>
                  )}
                </div>

                {/* Icon Circle */}
                <div
                  className={`absolute md:static top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 bg-gradient-to-tr ${item.color} text-white`}
                  aria-label={`${item.level} icon`}
                  title={item.level}
                >
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
