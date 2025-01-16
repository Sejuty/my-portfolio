/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import TypingIntro from "../components/TypingIntro";

const About = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const backdropVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(3px)",
    },
  };

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
    <motion.div 
      className="flex flex-col sm:h-fit h-[45vh] overflow-x-clip overflow-y-auto hide-scrollbar relative"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      transition={{ 
        duration: 1.5,
        delay: 2, // Appears after the text animation
        ease: "easeInOut"
      }}
    >
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "linear" }}
        className="text-blue-200 font-exo font-200 mt-2 mr-5 mb-4 text-sm lg:text-lg  tracking-wider"
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
    </motion.div>
  );
};

export default About;