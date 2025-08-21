import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import "./favorites.scss";
import FavoriteItem from "./favoriteItem";
import { TextHoverVariant } from "../../utils/variants/textHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Favorites = () => {
  const favorites = JSON.parse(
    useSelector((state) => state.favorites.favorites)
  );
  console.log(favorites);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="favorites__container"
        key="fade"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {favorites.length > 0 ? (
          <>
            {favorites.map((city) => (
              <FavoriteItem key={city.id} city={city} />
            ))}
          </>
        ) : (
          <motion.div
            className="favorites__container-item"
            key="fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="favorites__container-item__text no-icon no-link"
              whileHover={TextHoverVariant}
            >
              Touch the <FontAwesomeIcon icon={faHeart} /> to add a favorite
              city !
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Favorites;
