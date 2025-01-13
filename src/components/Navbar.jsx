/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Projects from "../layouts/Projects";
import Contact from "../layouts/Contact";
import Header from "../layouts/Header";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = ["home", "projects", "contact"];
  const components = {
    home: Header,
    projects: (props) => <Projects isScrolling={props.isScrolling} />,
    contact: Contact,
  };

  useEffect(() => {
    const observers = {};
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
              setIsScrolling(true);
              // Reset isScrolling after animation completes
              setTimeout(() => {
                setIsScrolling(false);
              }, 1000); // Adjust timing based on your scroll animation duration
            }
          });
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers[section] = observer;
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: "smooth" });
      // Reset isScrolling after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust timing based on your scroll animation duration
    }
  };

  return (
    <>
      <nav className="fixed top-4 right-6 z-10 transition-colors duration-300 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-6 sm:space-x-10 md:space-x-14 font-exo">
              {sections.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm sm:text-base md:text-lg ${
                    activeSection === item ? "text-secondary" : "text-tertiary"
                  } hover:text-secondary transition-colors duration-300`}
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

      <div className="h-full overflow-y-auto snap-y snap-mandatory hide-scrollbar">
        {sections.map((section) => {
          const Component = components[section];
          return (
            <div key={section} id={section} className="h-screen snap-start">
              <Component isScrolling={isScrolling} />
            </div>
          );
        })}
      </div>
    </>
  );
}
