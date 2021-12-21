import React from 'react'
import FavoriteIcon from '../../favoriteIcon'
import { addFavorite, deleteFromFavorites } from '../../../actions/favorites'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { TextHoverVariant } from '../../../utils/variants/textHover'


const FavoriteItem = (props) => {
  const dispatch = useDispatch()
  return (
    <div className="favorites__container-item">
      <FavoriteIcon isFav={true} addAction={() => dispatch(addFavorite(props.city))} deleteAction={() => dispatch(deleteFromFavorites(props.city.id))} />
      <motion.span className="favorites__container-item__text" whileHover={TextHoverVariant}>{props.city.name}</motion.span>
    </div>
  )
}

export default FavoriteItem
