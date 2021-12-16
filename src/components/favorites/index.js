import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromFavorites } from '../../actions/favorites'
import './favorites.scss'

const Favorites = () => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites)
  return (
    <>
      {favorites.length > 0 && (
        <div className="favorites__container">
          {favorites.map(city =>
            <div className="favorites__container-item" key={city.id}>
              <span className="favorites__container-item__text">{city.name}</span>
              <FontAwesomeIcon icon={faTimes} className="favorites__container-item__icon" onClick={() => dispatch(deleteFromFavorites(city.id))} />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Favorites
