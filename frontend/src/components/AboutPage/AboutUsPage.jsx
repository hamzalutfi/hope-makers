'use client'

import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const { theme } = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32 rounded-lg mb-16" style={{ backgroundImage: "url('/images/hope-makers-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div 
          className="relative text-center text-white z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Hope Makers</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Empowering individuals with disabilities to reach their full potential and create a world of endless possibilities.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <motion.section 
        className="container mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              Hope Makers was born from a simple yet powerful idea: every individual, regardless of their abilities, deserves the opportunity to thrive. Our journey began when a group of passionate advocates came together, united by their experiences with disability and their vision of a more inclusive world.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we've grown into a vibrant community of changemakers, innovators, and dreamers. We're not just providing support; we're revolutionizing the way society views and interacts with disability.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/our-story.jpg"
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Our Impact Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10,000+", description: "Lives touched" },
              { number: "500+", description: "Assistive devices provided" },
              { number: "100+", description: "Community partners" },
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
                <h3 className="text-5xl font-bold mb-4">{stat.number}</h3>
                <p className="text-xl">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Programs Section */}
      <motion.section 
        className="container mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Adaptive Technology Lab", description: "Developing innovative solutions to everyday challenges." },
            { title: "Skills Workshop", description: "Empowering individuals with valuable skills for independence." },
            { title: "Community Integration", description: "Breaking barriers and fostering inclusive communities." },
            { title: "Advocacy Training", description: "Equipping individuals to be their own best advocates." },
            { title: "Family Support Network", description: "Providing resources and community for families and caregivers." },
            { title: "Accessible Arts Initiative", description: "Promoting creativity and expression without limits." },
          ].map((program, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-lg">{program.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section 
        className="container mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Hamzeh lutfi", role: "Founder & CEO", img: "team1.jpg" },
            { name: "Mohammed shker", role: "Head of Technology", img: "team2.jpg" },
            { name: "Bayan Hamad", role: "Community Outreach Director", img: "team3.jpg" },
          ].map((member, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg text-center ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <img
                src={`/images/team/${member.img}`}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg my-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We envision a world where disability is recognized as a natural part of human diversity, where every individual has the opportunity to thrive, and where communities are enriched by the full participation of all their members.
          </p>
          <a href="/pages/login" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:bg-opacity-90 transition duration-300">
            Join Our Mission
            
          </a>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="container mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Voices of Hope</h2>
        <div className={`p-8 rounded-lg shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <p className="text-xl italic mb-6">
            "Hope Makers didn't just provide me with tools; they gave me a community and the confidence to pursue my dreams. Today, I'm a successful graphic designer, and I owe so much of that to the support and opportunities I received here."
          </p>
          <div className="flex items-center">
            <img
              src="/images/testimonial-avatar.jpg"
              alt="Alex Rivera"
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="font-bold">Alex Rivera</h4>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Graphic Designer & Hope Makers Alum</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">Be a Hope Maker</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your support can change lives. Join us in creating a world where everyone has the opportunity to reach their full potential.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/pages/login" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Donate Now
          </a>
          <a href="/volunteer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-full text-lg hover:bg-green-600 transition duration-300">
            Volunteer
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;

