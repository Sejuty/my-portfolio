import { motion } from "framer-motion";
const About = () => {

  
  return (
    <div className="flex flex-col h-full justify-center pl-6 ">
      <div className="text-secondary text-[35px] font-exo mt-24 lg:mt-0">About me</div>
      <div className="flex justify-start items-center my-3 ">
        <motion.div
          className="h-1 bg-secondary"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "linear" }}
        className="text-blue-200 font-exo font-200 mt-2 mr-5 mb-4 text-lg tracking-wider overflow-auto scroll-smooth hide-scrollbar backdrop-blur-sm"
      >
        I&apos;m a <span className="italic font-600">Frontend Web Developer</span>{" "}
        specializing in building and managing the front-end of websites and web
        applications that drive product success. Check out my work in the{" "}
        <a className="font-600 underline">Projects</a> section!
        <br /> <br />I enjoy sharing my knowledge of web development through
        content to help others in the dev community. Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/nishat-tafannum-92a13b1bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-600 underline"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/Sejuty"
          target="_blank"
          rel="noopener noreferrer"
          className="font-600 underline"
        >
          Github
        </a>
        , where I post helpful tips and resources about web development and
        programming.
        <br /> <br />
        I&apos;m open to job opportunities where I can contribute, learn, and grow.
        If you have a role that matches my skills, feel free to reach out!
      </motion.div>
    </div>
  );
};

export default About;
