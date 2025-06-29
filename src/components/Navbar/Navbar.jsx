import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] z-50 shadow-md px-5 md:px-20">
        <div className="text-white py-2 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Varshitha</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Karri</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex justify-center space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Desktop social icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/varsreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/varshitha-karri-3a486825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-[#8245ec] border border-gray-500 px-2 py-1 rounded-lg"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu icon */}
            <div className="md:hidden">
              {isOpen ? (
                <X
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <Menu
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu - Absolute Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-[#0f0f0f] text-gray-300 pb-4 text-center z-40">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`block w-full py-2 text-lg hover:text-[#8245ec] ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://github.com/varsreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/varshitha-karri-3a486825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      {/* <div className="h-14 md:h-16"></div> */}
    </>
  );
};

export default Navbar;
