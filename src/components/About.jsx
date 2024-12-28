/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import TypingIntro from "./TypingIntro";

const About = () => {
  // Animation variants for fade up animation
  const fadeUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Links data for better maintainability

  const StyledLink = ({ href, children, isExternal }) => (
    <a
      href={href}
      className="font-600 underline"
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );

  return (
    <div className="flex flex-col justify-center overflow-y-auto h-fit mb-10 hide-scrollbar">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "linear" }}
        className="text-blue-200 font-exo font-200 mt-2 mr-5 mb-4 text-lg tracking-wider"
      >
        <div>
          I&apos;m a{" "}
          <span className="italic font-600">Frontend Web Developer</span>{" "}
          specializing in building and managing the front-end of websites and
          web applications that drive product success. Check out my work in the{" "}
          <StyledLink href="#projects">Projects</StyledLink> section!
        </div>
      </motion.div>

      <TypingIntro />
    </div>
  );
};

export default About;
