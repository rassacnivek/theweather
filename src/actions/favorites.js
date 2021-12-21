export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export const addFavorite = (city) => ({
  type: ADD_FAVORITE,
  payload: {
    id: city.id,
    name: city.name,
    country: city.sys.country
  }
})

export const deleteFromFavorites = (id) => ({
  type: DELETE_FAVORITE,
  payload: {
    id
  }
})
