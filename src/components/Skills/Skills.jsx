// src/components/Skills/Skills.jsx
import React from "react";
import {
  Code2, Globe, Database, BarChart2, Wrench, Sparkles
} from "lucide-react";
import "../../index.css";

const skillsData = [
  {
    title: "Programming",
    icon: Code2,
    gradient: "from-[#a78bfa] to-[#7c3aed]",
    hoverColor: "hover:bg-[#a78bfa]/20",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Web Tech",
    icon: Globe,
    gradient: "from-[#f472b6] to-[#ec4899]",
    hoverColor: "hover:bg-[#f472b6]/20",
    skills: ["ReactJs","NextJs", "HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCSS", "Node.js", "Express.js", "REST APIs","Material UI"],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-[#34d399] to-[#059669]",
    hoverColor: "hover:bg-[#34d399]/20",
    skills: ["MySQL", "PHP", "MongoDB"],
  },
  {
    title: "Data Science",
    icon: BarChart2,
    gradient: "from-[#facc15] to-[#eab308]",
    hoverColor: "hover:bg-[#facc15]/20",
    skills: ["Matplotlib", "NumPy","Pandas", "Scikit-learn", "Seaborn"],
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "from-[#f87171] to-[#ef4444]",
    hoverColor: "hover:bg-[#f87171]/20",
skills: ["VS Code", "Git", "GitHub", "API Integration", "Postman", "Figma", "Excel", "Optimization", "Render", "Vercel"]
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    gradient: "from-[#a5f3fc] to-[#06b6d4]",
    hoverColor: "hover:bg-[#06b6d4]/20",
    skills: ["Problem Solving", "Time Management", "Adaptability", "Quick Learner"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-12 lg:px-32 bg-white dark:bg-[#0d0d0d] text-black dark:text-white transition-colors duration-500"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
          A quick overview of technologies and tools I work with.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map(({ title, icon: Icon, skills, gradient, hoverColor }) => (
          <div
            key={title}
            className={`group rounded-2xl p-[1px] bg-gradient-to-br ${gradient} hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-xl`}
          >
            <div className="bg-white dark:bg-[#121212] rounded-2xl p-6 h-full shadow-inner">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-[#8245ec] group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      text-xs sm:text-sm px-3 py-1 rounded-full 
                      bg-[#f9f9ff] dark:bg-[#1c1c2b] text-gray-800 dark:text-gray-200 
                      border border-gray-200 dark:border-gray-700 
                      transition-all duration-200 ${hoverColor} cursor-default
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
