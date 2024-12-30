/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../assets/data";

const Projects = ({ isScrolling }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const descriptionRef = useRef(null);

  const handleProjectClick = (project) => {
    if ((selectedProject && selectedProject.id === project.id) || isScrolling) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  const handleClickOutside = (event) => {
    if (descriptionRef.current && !descriptionRef.current.contains(event.target)) {
      setSelectedProject(null);
    }
  };

  const handleScroll = () => {
    if (selectedProject) {
      console.log("hello")
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedProject]);

  return (
    <div className="flex h-full relative">
      {/* Project Titles (Left Side) */}
      <div className="flex flex-col justify-center h-full gap-6 pl-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="text-blue-200 cursor-pointer"
            onClick={() => handleProjectClick(project)}
            initial={false}
            animate={{
              fontSize: selectedProject?.id === project.id ? "40px" : "12px",
              color: selectedProject?.id === project.id ? "#FF3F81" : "#BFDBFE",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </div>


      <AnimatePresence>
        {selectedProject && (
          <motion.div
            ref={descriptionRef}
            className="fixed top-1/2 right-6 transform -translate-y-1/2 p-6 border-l-4 border-secondary text-blue-200 backdrop-blur-sm w-1/3"
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: 0 }} // Slide into view
            exit={{ x: "100%" }} // Slide out of view
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
            <p className="mt-2 text-lg">{selectedProject.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
