import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { months, days } from "../../data/calendar";
import { addFavorite, deleteFromFavorites } from "../../actions/favorites";
import "./meteo.scss";
import FavoriteIcon from "../favoriteIcon";

const Meteo = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.location.currentCity);
  const favorites = JSON.parse(
    useSelector((state) => state.favorites.favorites)
  );
  const isFav = favorites.findIndex((fav) => fav.id === city.id);
  const now = new Date();
  return (
    <>
      {city && (
        <div className="meteo__container">
          <div className="meteo__container-temperature">
            {parseInt(city.main.temp)}°
          </div>
          <div className="meteo__container-infos">
            <div className="meteo__container-infos__city">{city.name}</div>
            <div className="meteo__container-infos__time">
              {now.getHours()}:{now.getMinutes()} — {days[now.getDay()]},{" "}
              {now.getDate()} {months[now.getMonth()]} &apos;
              {now.getFullYear().toString().substring(2)}
            </div>
          </div>
          <div className="meteo__container-details">
            <img
              className="meteo__container-details__icon"
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt={city.weather[0].description}
            />
            <div className="meteo__container-details__text">
              {city.weather[0].main}
            </div>
          </div>
          <FavoriteIcon
            isFav={isFav}
            addAction={() => dispatch(addFavorite(city))}
            deleteAction={() => dispatch(deleteFromFavorites(city.id))}
          />
        </div>
      )}
    </>
  );
};

export default Meteo;
