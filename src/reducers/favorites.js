import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/favorites'
const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

const favoritesReducer = (state = initialState, action) => {
  let favorites
  switch (action.type) {
    case ADD_FAVORITE:
      favorites = state.favorites
      favorites.push({
        id: action.payload.id,
        name: action.payload.name
      })
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('add')
      console.log({ ...state, favorites })
      return {
        ...state,
        favorites
      }

    case DELETE_FAVORITE:
      favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('delete')
      console.log({ ...state, favorites })
      return {
        ...state,
        favorites
      }
    default:
      return state
  }
}

export default favoritesReducer
