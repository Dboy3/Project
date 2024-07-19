import React from "react";
import "tailwindcss/tailwind.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <mesh position={[0, 0, -20]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">John Doe</h1>
            <p className="text-2xl mb-8">Web Developer & Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaGithub className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl"
            >
              <img
                src={`https://via.placeholder.com/500x300?text=Project+${
                  index + 1
                }`}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Project {index + 1}
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "HTML/CSS",
            "JavaScript",
            "React",
            "Node.js",
            "UI/UX Design",
            "Photoshop",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{skill}</h3>
              <p className="text-gray-700">Advanced</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl mb-6">Let's discuss your project.</p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 rounded-lg bg-gray-900 text-white"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 rounded-lg bg-gray-900 text-white"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="p-3 rounded-lg bg-gray-900 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
