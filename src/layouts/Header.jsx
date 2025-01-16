import { motion } from "framer-motion";
import About from "./About";

export default function Header() {
  return (
    <div className="flex flex-col h-full lg:justify-end px-4 sm:px-6 lg:px-8 py-6 ">
      <div className="flex flex-col justify-end flex-1 lg:block lg:flex-none mt-16 lg:mt-0">
        <div>
          <motion.h1
            style={{
              overflow: "hidden",
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="text-[25px] sm:text-[30px] xl:text-[40px] 2xl:text-[50px] text-secondary font-exo font-normal tracking-wide whitespace-nowrap"
          >
            Nishat Tafannum
          </motion.h1>
        </div>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-tertiary pt-2 font-exo font-400 text-[16px] sm:text-[20px] xl:text[25px] 2xl:text-[30px] tracking-wide pb-3 2xl:pb-12"
        >
          Frontend Web Developer
        </motion.p>
        <About />
      </div>
    </div>
  );
}