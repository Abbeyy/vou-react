//https://www.valentinog.com/blog/redux/
import {LOG_IN, LOG_OUT, SET_USERNAME} from '../constants/actionTypes';

const initialState = {
  auth : {
    loggedIn: false,
    username: ''
  }
};

// Redux should NOT impact the original state. (immutability issues)
//   use concat(), slice(), or the spread operator for arrays
//   use Object.assign() or object spread of objects


//A data store: given an initial state to the data, and figures out what to do to it by the action given.
export default (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        return {...state, auth: {...state.auth, loggedIn: true}};
      case LOG_OUT:
        return {...state, auth: {...state.auth, loggedIn: false}};
        // case GET_USERNAME: selector instead
        case SET_USERNAME :
          return {...state, auth: {...state.auth, username: action.payload}};
      default:
        return state
    }
  }
