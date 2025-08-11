import { useEffect, useState } from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/Loading";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/notfound", { replace: true });
    }
  }, [id, navigate]);

  if (!project) return <Loading />;

  const {
    title,
    image,
    technologies,
    summary,
    live,
    github,
    challenges,
    futurePlans,
  } = project;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-600 mb-8 text-center">
        {title}
      </h1>

      {/* Image */}
      <div className="mb-12 shadow-2xl rounded-3xl overflow-hidden max-h-[450px] md:max-h-[550px]">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full object-cover h-full"
          loading="lazy"
        />
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-100 text-indigo-700 rounded-full px-5 py-2 text-sm font-semibold shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Summary */}
      <article className="prose max-w-none prose-indigo mx-auto mb-16">
        <p className="text-lg leading-relaxed">{summary}</p>
      </article>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          aria-label={`View live demo of ${title}`}
        >
          <HiExternalLink className="w-6 h-6" />
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          aria-label={`View GitHub repository of ${title}`}
        >
          <HiCode className="w-6 h-6" />
          GitHub Repo
        </a>
      </div>

      {/* Challenges */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 inline-block pb-1">
          Challenges Faced
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{challenges}</p>
      </section>

      {/* Future Plans */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 inline-block pb-1">
          Future Improvements
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{futurePlans}</p>
      </section>
    </section>
  );
}
