import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#e0e0e0] text-white text-center py-50">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-6xl font-bold mb-6">
            <TypeAnimation
              sequence={[
                "Welcome to Influcoder",
                3000,
                "WE ARE HIGH ON TECH!",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h1>
          <p className="text-2xl text-black font-light mb-8">
            Your ultimate destination for coding tutorials, tips, and projects.
          </p>
          <a
            href=""
            className="bg-[#C87941] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#87431D] transition duration-300"
          >
            Contact Now
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F9F9F9] text-[#290001]">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold mb-6">About Influcoder</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Influcoder is a platform where aspiring developers can learn web
            development, explore exciting projects, and grow their coding
            skills. Join us to level up your programming journey.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Project {project}</h3>
                <p className="text-gray-700">
                  {project === 1 &&
                    "A full-stack e-commerce website built with the MERN stack."}
                  {project === 2 &&
                    "A dynamic blogging platform using React and Firebase."}
                  {project === 3 &&
                    "A real-time chat app powered by Node.js and Socket.IO."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="subscribe"
        className="bg-[#343332] text-white text-center py-16"
      >
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-lg mb-8">
            Stay updated with the latest tutorials and projects. Subscribe to
            our Youtube Channel!
          </p>

          <a
            href="https://www.youtube.com/@influcoder"
            className="bg-[#ffffff] text-black px-6 py-2 rounded-lg hover:bg-[#c1c1c1] transition duration-300"
          >
            Subscribe
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Influcoder. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
