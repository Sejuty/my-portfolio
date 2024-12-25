import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="shadow transition-colors duration-300 py-6 h-full">
      <div className="flex flex-col h-full justify-end p-6 pb-6">
        <div>
          <motion.h1
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="text-[60px] text-secondary font-sabaling font-normal tracking-wide"
          >
            Nishat Tafannum
          </motion.h1>
        </div>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-gray-400 pt-2 font-sabaling font-thin tracking-wide"
        >
          Frontend Software Engineer
        </motion.p>
      </div>
    </header>
  );
}
