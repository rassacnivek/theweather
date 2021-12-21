import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/favorites'
const initialState = {
  favorites: localStorage.getItem('favorites') || "[]"
}

const favoritesReducer = (state = initialState, action) => {
  let favorites
  switch (action.type) {
    case ADD_FAVORITE:
      favorites = JSON.parse(state.favorites)
      favorites.push({
        id: action.payload.id,
        name: action.payload.name,
        country: action.payload.country
      })
      localStorage.setItem('favorites', JSON.stringify(favorites))
      return {
        ...state,
        favorites: JSON.stringify(favorites)
      }

    case DELETE_FAVORITE:
      favorites = (JSON.parse(state.favorites)).filter(favorite => favorite.id !== action.payload.id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      return {
        ...state,
        favorites: JSON.stringify(favorites)
      }
    default:
      return state
  }
}

export default favoritesReducer
