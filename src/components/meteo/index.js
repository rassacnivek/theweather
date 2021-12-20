import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { months, days } from '../../data/calendar'
import { addFavorite, deleteFromFavorites } from '../../actions/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import './meteo.scss'

const Meteo = () => {
  const dispatch = useDispatch()
  const city = useSelector(state => state.location.currentCity)
  const favorites = JSON.parse(useSelector(state => state.favorites.favorites))
  const isFav = favorites.findIndex(fav => fav.id === city.id)
  const now = new Date()
  return (
    <>
      {city && (
        <div className="meteo__container">
          <div className="meteo__container-temperature">{parseInt(city.main.temp)}°</div>
          <div className="meteo__container-infos">
            <div className="meteo__container-infos__city">{city.name}</div>
            <div className="meteo__container-infos__time">{now.getHours()}:{now.getMinutes()} — {days[now.getDay()]}, {now.getDate()} {months[now.getMonth()]} '{now.getFullYear().toString().substr(2, 2)}</div>
          </div>
          <div className="meteo__container-details">
            <img className="meteo__container-details__icon" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description} />
            <div className="meteo__container-details__text">{city.weather[0].main}</div>
          </div>
          <motion.div className="meteo__container-favorite" whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}>
            {isFav > -1 ? (
              <FontAwesomeIcon icon={faSolidHeart} className="meteo__container-favorite__button" onClick={() => dispatch(deleteFromFavorites(city.id))} />
            ) : (
              <FontAwesomeIcon icon={faRegularHeart} className="meteo__container-favorite__button" onClick={() => dispatch(addFavorite(city))} />
            )}
          </motion.div>
        </div>
      )
      }
    </>
  )
}

export default Meteo
