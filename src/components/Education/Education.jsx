import React from 'react';
import { GraduationCap, Award, BookOpen, Lightbulb } from 'lucide-react';

const Education = () => {
  const education = [
    {
      year: '2022-2026',
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'RGUKT Srikakulam',
      grade: 'CGPA: 9.2',
      status: 'Ongoing',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2020-2022',
      degree: 'Pre-University Course',
      institution: 'RGUKT Srikakulam',
      grade: 'CGPA: 9.6',
      status: 'Completed',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2020',
      degree: 'Secondary School Certificate',
      institution: 'ZPHS, Islampeta',
      grade: 'CGPA: 10',
      status: 'Completed',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden" id='education'>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-pink-100/50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get to Know{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Me Better
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves exploring new technologies and creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science and Engineering at RGUKT Srikakulam, 
                  where I've maintained an excellent academic record with a CGPA of 9.2.
                </p>
                <p>
                  My passion lies in full-stack web development using the MERN stack and Android development 
                  with Java. I love the process of turning ideas into functional, beautiful applications that 
                  solve real-world problems.
                </p>
                <p>
                  Beyond coding, I enjoy practicing yoga and crafting, which help me maintain a balanced 
                  perspective and fuel my creativity. I'm always excited to learn new technologies and 
                  explore innovative solutions.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                <p className="text-orange-100 text-sm">
                  I thrive on tackling complex challenges and finding elegant solutions
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Team Player</h4>
                <p className="text-purple-100 text-sm">
                  Collaborative approach with excellent communication skills
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Educational Background
            </h3>
            {education.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 translate-y-full"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-orange-500 dark:text-orange-400">
                        {item.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Ongoing' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
