/* eslint-disable react/prop-types */

import { motion } from 'framer-motion'

const Card = ({ number }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-screen h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center snap-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-6xl font-bold text-white">Card {number}</span>
    </motion.div>
  )
}

export default Card
