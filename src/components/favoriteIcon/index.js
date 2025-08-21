import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./favoriteIcon.scss";

const FavoriteIcon = (props) => {
  return (
    <motion.div
      className="favorite"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {props.isFav ? (
        <FontAwesomeIcon
          icon={faSolidHeart}
          className="favorite-button"
          onClick={props.deleteAction}
        />
      ) : (
        <FontAwesomeIcon
          icon={faRegularHeart}
          className="favorite-button"
          onClick={props.addAction}
        />
      )}
    </motion.div>
  );
};

FavoriteIcon.propTypes = {
  isFav: PropTypes.bool,
  addAction: PropTypes.func,
  deleteAction: PropTypes.func,
};

export default FavoriteIcon;
