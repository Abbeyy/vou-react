import {LOG_IN, LOG_OUT, SET_USERNAME} from '../constants/actionTypes';

//Functions that return a plain object - concept e.g. counter > increment

export function logIn(payload) {
    return { type: LOG_IN, payload }
  };

  export function logOut(payload) {
    return { type: LOG_OUT, payload }
  };

  // export function getUsername(payload) {
  //   return { type: GET_USERNAME, payload }
  // };

  export function setUsername(payload) {
    return { type: SET_USERNAME, payload }
  };
