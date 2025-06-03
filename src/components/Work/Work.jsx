import React, { useEffect, useRef, useState } from "react";
import { Code, Smartphone, ShoppingCart, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Job Portal",
    description:
      "A comprehensive dual-role platform for students and recruiters built with MERN stack. Features include user authentication, job listings, company profiles, and advanced search functionality.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Git",
      "GitHub",
      "Vercel",
    ],
    icon: <Code className="w-16 h-16 text-purple-500" />,
    gradient: "bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300",
    github: "https://github.com/yourusername/job-portal",
    webapp: "https://jobportal.vercel.app",
  },
  {
    title: "Car Finder App",
    description:
      "An intuitive car search and discovery application with advanced filtering options, wishlist functionality, and theme toggle. Built with modern React and local storage integration.",
    tags: [
      "React.js",
      "TailwindCSS",
      "LocalStorage",
      "JavaScript",
      "Git",
      "GitHub",
      "Render",
    ],
    icon: <Smartphone className="w-16 h-16 text-pink-500" />,
    gradient: "bg-gradient-to-br from-purple-500 via-pink-400 to-rose-300",
    github: "https://github.com/varsreddy/CarFinderApp",
    webapp: "https://carfinderapp-p17s.onrender.com/",
  },
  {
    title: "Amazon Clone",
    description:
      "A fully functional e-commerce platform clone featuring product display, shopping cart, wishlist management, and secure payment processing with card input validation.",
    tags: [
      "React.js",
      "CSS",
      "JavaScript",
      "Payment Integration",
      "Git",
      "GitHub",
      "Vercel",
    ],
    icon: <ShoppingCart className="w-16 h-16 text-red-500" />,
    gradient: "bg-gradient-to-br from-orange-400 via-rose-400 to-red-400",
    github: "https://github.com/yourusername/amazon-clone",
    webapp: "https://amazonclone.vercel.app",
  },
  {
    title: "GeminiClone MERN",
    description:
      "A sleek and minimal Gemini AI web app clone built using ReactJS and CSS. This project mimics a conversational AI assistant interface with functional state management and modern UI layout.",
    tags: [
      "ReactJS",
      "Vite",
      "CSS3",
      "useState",
      "useContext",
      "OpenAI",
      "Git",
      "GitHub",
    ],
    icon: <Code className="w-16 h-16 text-blue-500" />,
    gradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500",
    github: "https://github.com/varsreddy/GeminiCloneMERN",
    webapp: "",
  },
  {
    title: "GitHub Profile Analyzer",
    description:
      "A frontend-only React + TypeScript application that analyzes any public GitHub user's activity. Displays a list of public repositories and a daily commit chart using GitHub's public API.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Recharts",
      "Git",
      "GitHub",
    ],
    icon: <Code className="w-16 h-16 text-green-500" />,
    gradient: "bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300",
    github: "https://github.com/varsreddy/GithubProfileAnalyzer",
    webapp: "",
  },
  {
    title: "AdvancedAuth MERN",
    description:
      "A MERN stack-based authentication system featuring email OTP login. Demonstrates secure login functionality and user data protection practices.",
    tags: [
      "MERN",
      "OTP",
      "Email",
      "Authentication",
      "Node.js",
      "ReactJS",
      "Git",
      "GitHub",
    ],
    icon: <Code className="w-16 h-16 text-yellow-500" />,
    gradient: "bg-gradient-to-br from-yellow-300 via-orange-400 to-amber-500",
    github: "https://github.com/varsreddy/AdvancedAuthMERN",
    webapp: "",
  },
  {
    title: "Weather App",
    description:
      "A simple yet effective JavaScript-based weather app that fetches real-time data from an API to show current weather conditions of any city.",
    tags: ["HTML", "CSS", "JavaScript", "API", "Git", "GitHub"],
    icon: <Smartphone className="w-16 h-16 text-sky-500" />,
    gradient: "bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-500",
    github: "https://github.com/varsreddy/weather-app-javascript",
    webapp: "",
  },
];


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Scroll the container by the width of one card (~320px)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Track scroll to implement scaling effect on center card
  const handleScroll = () => {
    if (!scrollRef.current) return;
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Calculate scaling for each card based on scroll position
  const getScale = (index) => {
    if (!scrollRef.current) return 1;
    const cardWidth = 320;
    const center = scrollPosition + scrollRef.current.offsetWidth / 2;
    const cardCenter = index * (cardWidth + 24) + cardWidth / 2; // 24 is approx gap
    const distance = Math.abs(center - cardCenter);
    const maxDistance = cardWidth + 24;
    // scale between 0.85 and 1 depending on distance from center
    const scale = 1 - Math.min(distance / maxDistance, 1) * 0.15;
    return scale;
  };

  return (
    <section
      id="projects"
      className="py-24 px-[6vw] md:px-[6vw] lg:px-[10vw] font-sans relative bg-gray-50 dark:bg-[#0d0d0d]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various
          technologies
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Prev arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg"
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 scrollbar-none"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Firefox
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                transform: `scale(${getScale(index)})`,
                transition: "transform 0.3s ease",
                scrollSnapAlign: "start",
                width: 320,
              }}
              className="flex-shrink-0 rounded-2xl shadow-lg overflow-hidden cursor-pointer bg-white dark:bg-[#1a1a1a]"
              onClick={() => handleOpenModal(project)}
            >
              <div className="p-6 flex justify-center items-center bg-white dark:bg-[#1a1a1a]">
                {project.icon}
              </div>
              <div className="px-6 pb-6 text-center bg-white dark:bg-[#1a1a1a]">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 pt-2 line-clamp-3">{project.description}</p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs font-semibold text-purple-600 rounded-full px-2 py-1 border border-purple-600 dark:border-purple-400 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(project);
                  }}
                  className="bg-purple-600 shadow-md text-white hover:bg-purple-800 px-4 py-2 text-sm rounded-lg transition-all font-semibold"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg"
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-white dark:bg-[#222] rounded-xl p-6 relative shadow-lg"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-purple-600"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>
            <div className="flex justify-center mb-4">{selectedProject.icon}</div>
            <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{selectedProject.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block text-xs font-semibold text-purple-600 rounded-full px-3 py-1 border border-purple-600 dark:border-purple-400 dark:text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 font-semibold"
                >
                  GitHub
                </a>
              )}
              {selectedProject.webapp && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 font-semibold"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hide scrollbar for WebKit */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge */
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Work;