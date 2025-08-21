import React from "react";
import FavoriteIcon from "../../favoriteIcon";
import { addFavorite, deleteFromFavorites } from "../../../actions/favorites";
import { setLocation } from "../../../actions/location";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { TextHoverVariant } from "../../../utils/variants/textHover";
import PropTypes from "prop-types";
import axios from "axios";

const FavoriteItem = (props) => {
  const dispatch = useDispatch();
  const setCurrentLocation = (id) => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}&id=${id}`)
      .then((res) => {
        dispatch(setLocation(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <motion.div
      className="favorites__container-item"
      whileHover={TextHoverVariant}
    >
      <FavoriteIcon
        isFav={true}
        addAction={() => dispatch(addFavorite(props.city))}
        deleteAction={() => dispatch(deleteFromFavorites(props.city.id))}
      />
      <motion.span
        className="favorites__container-item__text"
        onClick={() => setCurrentLocation(props.city.id)}
      >
        {props.city.name}
      </motion.span>
    </motion.div>
  );
};

FavoriteItem.propTypes = {
  city: PropTypes.object,
};

export default FavoriteItem;
