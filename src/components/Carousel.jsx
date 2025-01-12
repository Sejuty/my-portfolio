/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = ({ cards }) => {
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: cards.length }, (_, i) => i)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % cards.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex + cards.length - 1) % cards.length
      )
    );
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="rounded-[12px] p-6 text-white text-center shadow-lg relative backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300"
          // initial="center"
          animate={positions[positionIndexes[index]]}
          variants={cardVariants}
          transition={{ duration: 0.8 }}
          style={{
            width: "40%",
            position: "absolute",
          }}
        >
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p className="text-white/90">{card.description}</p>
        </motion.div>
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
