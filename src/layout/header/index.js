import React from "react";
import { motion } from "framer-motion";
import "./header.scss";
import { useSelector } from "react-redux";
import {
  TitleVariants,
  pulseVariants,
  pulseAnimate,
  textAnimate,
  heartbeatTransition,
  loadedTitleTransition,
} from "../../utils/variants/header";

const Header = () => {
  const city = useSelector((state) => state.location.currentCity);

  return (
    <motion.div
      className="brand__wrapper"
      initial="hidden"
      animate={city ? "loaded" : textAnimate}
      variants={TitleVariants}
      transition={city ? loadedTitleTransition : heartbeatTransition}
      whileHover={city && { scale: 1.2 }}
    >
      {!city &&
        pulseVariants.map((pulse, index) => (
          <motion.div
            key={index}
            className="brand__pulse"
            style={{
              width: pulse.size,
              height: pulse.size,
              backgroundColor: pulse.colors[0],
            }}
            initial={{ opacity: 0 }}
            animate={{
              ...pulseAnimate,
              backgroundColor: pulse.colors,
            }}
            transition={{
              scale: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: [0.5, 0, 0.5, 1],
                delay: pulse.delay,
              },
              opacity: {
                duration: 0.8,
                times: [0, 1],
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: "easeOut",
                delay: pulse.delay,
              },
              backgroundColor: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: "linear",
                delay: pulse.delay,
              },
            }}
          />
        ))}
      <motion.div className="brand">the.weather</motion.div>
    </motion.div>
  );
};

export default Header;
