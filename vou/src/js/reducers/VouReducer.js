//https://www.valentinog.com/blog/redux/
import {LOG_IN, LOG_OUT} from '../constants/actionTypes';

const initialState = require('./initialstate.json');

// Redux should NOT impact the original state. (immutability issues)
//   use concat(), slice(), or the spread operator for arrays
//   use Object.assign() or object spread of objects

//A data store: given an initial state to the data, and figures out what to do to it by the action given.
export default (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        console.log(action.payload);
        return {...state, auth: {loggedIn: true, username: action.payload}};
      case LOG_OUT:
        return {...state, auth: {...state.auth, loggedIn: false}};
      default:
        return state
    }
  }
