import React from 'react';
import { Monitor, Smartphone, Palette, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      subtitle: 'MERN Stack',
      description: 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Creating responsive, scalable, and user-friendly web solutions.',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Responsive Design', 'RESTful APIs', 'Database Integration', 'Performance Optimization']
    },
    {
      title: 'Android Development',
      subtitle: 'Java',
      description: 'Native Android applications with clean UI/UX design and robust functionality. Building apps that provide excellent user experience.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Native Development', 'Material Design', 'Performance Optimization', 'User Experience']
    },
    {
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience and modern design principles.',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      title: 'Data Science & Analytics',
      subtitle: 'Insights & Visualization',
      description: 'Data analysis, visualization, and predictive modeling solutions to help make data-driven decisions and uncover valuable insights.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Data Analysis',  'Data Visualization', 'Predictive Modeling']
    }
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                  {service.subtitle}
                </p>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    What I offer:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
