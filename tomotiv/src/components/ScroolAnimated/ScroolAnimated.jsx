import React from 'react'
import { motion } from 'framer-motion';

const Up = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, delay:.5 }}
    >
      {children}
    </motion.div>
  );
}


const Left = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Right = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ScroolAnimated= {Up, Left, Right}
export default ScroolAnimated