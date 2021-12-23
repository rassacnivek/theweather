import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./favorites.scss";
import FavoriteItem from "./favoriteItem";

const Favorites = () => {
  const favorites = JSON.parse(
    useSelector((state) => state.favorites.favorites)
  );
  return (
    <>
      {favorites.length > 0 && (
        <motion.div className="favorites__container">
          {favorites.map((city) => (
            <FavoriteItem key={city.id} city={city} />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Favorites;
