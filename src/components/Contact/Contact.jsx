import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS parameters
    const serviceID = "service_qxzikae";
    const templateID = "template_kbuycw5";
    const publicKey = "eEKHBsY0_I4L08BzD";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "varshithak809@gmail.com",
      href: "mailto:varshithak809@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 87901 28280",
      href: "tel:+918790128280",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/varsreddy",
      username: "@varsreddy",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/varshitha-karri-3a486825b/",
      username: "varshitha-karri",
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/k_varshu/",
      username: "k_varshu",
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/varshithak809",
      username: "varshithak809",
    },
  ];

  return (
    <section
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
      id="contact"
    >
      {/* Blurred Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title and Description */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6 shadow-lg">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about technology? I'd
            love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-500" />
                Contact Information
              </h3>

              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="text-blue-500">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item, idx) => {
                let bgClass = "";
                switch (item.label) {
                  case "GitHub":
                    bgClass =
                      "bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-600";
                    break;
                  case "LinkedIn":
                    bgClass =
                      "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500";
                    break;
                  case "LeetCode":
                    bgClass =
                      "bg-yellow-400 text-black hover:bg-yellow-500 dark:hover:bg-yellow-300";
                    break;
                  case "HackerRank":
                    bgClass =
                      "bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-500";
                    break;
                  default:
                    bgClass =
                      "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white";
                }

                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-xl transition transform hover:scale-105 ${bgClass}`}
                  >
                    {item.icon}
                    <span className="ml-2 text-sm font-medium">{item.username}</span>
                  </a>
                );
              })}
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message{" "}
              <Send className="inline ml-2 w-5 h-5 text-blue-500" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {isSubmitted && (
                <div className="flex items-center mt-4 text-green-500 font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
