"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Header from "./Header";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const components = {
    home: Header,
    about: About,
    skills: Skills,
    projects: Projects,
  };

  const ActiveComponent = components[activeSection];

  return (
    <>
      <nav className="absolute top-0 right-6 z-10 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-14 font-exo">
              {["home", "about", "skills", "projects"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                  }}
                  className={`capitalize ${
                    activeSection === item
                      ? "text-secondary "
                      : "text-tertiary "
                  } hover:text-secondary  transition-colors duration-300`}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        transition={{ duration: 0.3, delay: 1, ease: "linear" }}
        className="h-full"
      >
        <ActiveComponent />
      </motion.div>
    </>
  );
}
