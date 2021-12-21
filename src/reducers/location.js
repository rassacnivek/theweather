import { SET_CURRENT_LOCATION } from '../actions/location'
import { heros } from '../data/calendar'

const initialState = {
  currentCity: null,
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      const h = heros.filter(hero => hero.ids.includes(action.payload.weather[0].id.toString()))
      action.payload.bgImg = h[0].name
      return {
        ...state,
        currentCity: action.payload
      }
    default:
      return state
  }
}

export default locationReducer
