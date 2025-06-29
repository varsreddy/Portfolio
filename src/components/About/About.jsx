import ReactTypingEffect from "react-typing-effect";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-10 px-6 sm:px-10 lg:px-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-gradient-to-br from-orange-100/50 to-pink-100/50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full animate-fade-in">
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Varshitha Karri
              </span>
            </h1>

            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white animate-fade-in">
              <span className="text-[#8245ec]">I am a </span>
              <ReactTypingEffect
                text={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "UI/UX Designer",
                  "App Developer",
                  "Coder",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed">
              I love crafting clean user experiences and solving real-world
              problems with code. I specialize in MERN stack development and
              Android applications with a passion for pixel-perfect interfaces
              and scalable backend systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <a
                href="https://drive.google.com/file/d/1gRhNxnKNre88arfoqHCbzO8DbpLjSvtW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-3 px-8 rounded-full font-bold text-lg shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-[#8245ec] to-[#a855f7]"
              >
                View My Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Contact Me <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-50 h-50 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://i.postimg.cc/T1kjxH81/pic-mine.jpg"
                    alt="Varshitha Karri"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <span className="absolute -top-4 -right-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce">
                💻
              </span>
              <span
                className="absolute -bottom-5 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                📱
              </span>
              <span
                className="absolute top-1/2 -left-6 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-base animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                🎨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
