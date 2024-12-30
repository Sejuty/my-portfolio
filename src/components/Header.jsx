import { motion } from "framer-motion";
import About from "./About";

export default function Header() {
  return (
    <div className="flex flex-col h-full justify-end px-8 pb-16 mt-20 lg:mt-0 ">
      <div>
        <motion.h1
          style={{
            overflow: "hidden",
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="text-[50px] 2xl:text-[60px] text-secondary font-exo font-normal tracking-wide lg:whitespace-nowrap"
        >
          Nishat Tafannum
        </motion.h1>
      </div>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-tertiary pt-2 font-exo font-400 text-2xl tracking-wide pb-12"
      >
        Frontend Web Developer
      </motion.p>
      <About />
    </div>
  );
}
