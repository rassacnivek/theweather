import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Details from "../../components/details";
import Favorites from "../../components/favorites";
import Search from "../../components/search";
import { motion } from "framer-motion";
import { ChevronVariants, SidebarVariants } from "../../utils/variants/sidebar";
import "./sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const city = useSelector((state) => state.location.currentCity);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
    >
      {city && (
        <motion.div
          className="sidebar"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={SidebarVariants}
        >
          <motion.span
            className="sidebar__chevron"
            onClick={() => setIsOpen(!isOpen)}
            variants={ChevronVariants}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="sidebar__chevron-image"
            />
          </motion.span>
          <Search />
          <div className="sidebar__scroll">
            <Favorites />
            <Details />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
