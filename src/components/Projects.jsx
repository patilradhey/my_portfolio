import project1 from "../assets/tindog.png";
import project2 from "../assets/vasline.png";
import project3 from "../assets/real-estate.png";
import project4 from "../assets/movie.png";
import project5 from "../assets/world.png";
import project6 from "../assets/task.png";
import project7 from "../assets/stock.png";
import project8 from "../assets/electric.png";
import project9 from "../assets/adidas.png";
import project10 from "../assets/Doctor.png";

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 10,
      title: "MedConnect",
      image: project10,
      tags: ["React", "Node.js", "MongoDB", "Google Gemini", "Socek.io"],
      github: "https://github.com/patilradhey/backend-doctor-app.git",
    },
    {
      id: 1,
      title: "TinDog",
      image: project1,
      tags: ["HTML", "CSS"],
      github: "https://github.com/patilradhey/tinDog",
      demo : "https://tin-dog-henna.vercel.app/"
    },
    {
      id: 2,
      title: "Vasline Clone Website",
      image: project2,
      tags: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/patilradhey/WS",
      demo : "https://vercel.com/patilradheys-projects/vasline"
    },
    {
      id: 3,
      title: "Real-Estate",
      image: project3,
      tags: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/patilradhey/real-estate-property",
      demo : "https://real-estate-property-beryl.vercel.app/"
    },
    {
      id: 4,
      title: "Movie Review",
      image: project4,
      tags: ["React", "JavaScript"],
      github: "https://github.com/patilradhey/movie_collection_with_review",
      demo : "https://movie-collection-with-review.vercel.app/"
    },
    {
      id: 5,
      title: "World Dashboard",
      image: project5,
      tags: ["React", "NodeJS", "MySQL", "Chart.js"],
      github: "https://github.com/patilradhey/backend-world-dashboard",
    },
    {
      id: 6,
      title: "Task Manager",
      image: project6,
      tags: ["React", "NodeJS", "MySQL"],
      github: "https://github.com/patilradhey/backend-task-mgmt",
    },
    {
      id: 7,
      title: "Stock Market Analysis",
      image: project7,
      tags: ["Excel", "PowerBi", "MySQL"],
      github: "https://github.com/patilradhey/Stock_Market_Analysis",
    },
    {
      id: 8,
      title: "Electric Vehicle Dashboard",
      image: project8,
      tags: ["Python", "PowerBi"],
      github: "https://github.com/patilradhey/Electric_Vehicle_Dashboard",
    },
    {
      id: 9,
      title: "Adidas Sales Analysis",
      image: project9,
      tags: ["PowerBi"],
      github: "https://github.com/patilradhey/Adidas_Sales_Analysis",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #1f2937, #111827)"
                  : "linear-gradient(to bottom right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300
            hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                group-hover:scale-110 transition-transform
                duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center
                  justify-center gap-1.5 px-3 py-2
                  text-sm rounded-lg hover:opacity-90
                  transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-3 py-2 text-sm rounded-lg bg-gray-400 text-white cursor-not-allowed"
                    >
                      Demo Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/patilradhey"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold
           gap-2 px-7 py-4 text-white
          text-sm rounded-full hover:shadow-lg
          hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
