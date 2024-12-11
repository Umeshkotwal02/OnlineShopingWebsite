import React from 'react';
import { motion } from 'framer-motion';
import "../../styles/Motion.css"
const Motion = () => {
  return (
    <>
      {/* Parallax Background Section */}
      <section className="sixth-section" >

      <motion.div
        className="content-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.div>
      </section>

    </>
  );
};

export default Motion;
