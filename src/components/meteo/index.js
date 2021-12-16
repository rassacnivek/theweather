import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { months, days } from '../../data/calendar'
import { getCurrentDate } from '../../actions/time'
import { addFavorite, deleteFromFavorites } from '../../actions/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import './meteo.scss'

const Meteo = () => {
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(getCurrentDate())
  }, 1000)

  const city = useSelector(state => state.location.currentCity)
  const now = useSelector(state => state.time.currentDate)
  const favorites = useSelector(state => state.favorites.favorites)
  const isFav = favorites.findIndex(fav => fav.id === city.id)
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
          <div className="meteo__container-favorite">
            {isFav > -1 ? (
              <FontAwesomeIcon icon={faSolidHeart} className="meteo__container-favorite__button" onClick={() => dispatch(deleteFromFavorites(city.id))} />
            ) : (
              <FontAwesomeIcon icon={faRegularHeart} className="meteo__container-favorite__button" onClick={() => dispatch(addFavorite(city))} />
            )}
          </div>
        </div>
      )
      }
    </>
  )
}

export default Meteo
