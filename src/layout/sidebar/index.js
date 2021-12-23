import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Details from "../../components/details";
import Favorites from "../../components/favorites";
import Search from "../../components/search";
import { motion } from "framer-motion";
import { ChevronVariants, SidebarVariants } from "../../utils/variants/sidebar";
import "./sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className="sidebar"
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
  );
};

export default Sidebar;
