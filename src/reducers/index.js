import {combineReducers} from 'redux'
import favorites from './favorites'
import location from './location'

export default combineReducers({
  favorites,
  location
})