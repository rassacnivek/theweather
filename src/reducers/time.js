import { GET_CURRENT_DATE } from '../actions/time'
const initialState = {
  currentDate: new Date()
}

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_DATE:
      return {
        ...state,
        currentDate: new Date()
      }
    default:
      return state
  }
}

export default timeReducer
