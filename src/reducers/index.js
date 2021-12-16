import {combineReducers} from 'redux'
import favorites from './favorites'
import location from './location'
import time from './time'

export default combineReducers({
  favorites,
  location,
  time
})