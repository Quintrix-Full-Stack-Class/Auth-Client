/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  export default function (state = initialState, action) {
    const {
      type,
      payload
    } = action;
  
    switch (type) {
      // case USER_LOADED:
      //   return {
      //     ...state,
      //     isAuthenticated: true,
      //       loading: false,
      //       user: payload
      //   };
      case REGISTER_SUCCESS:
        return {...state};
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.accessToken);
        return {
          ...state,
          user:payload,
          isAuthenticated: true,
            loading: false
        };
      case REGISTER_FAIL:
        return {...state};
      case AUTH_ERROR:
        return {...state};
      case LOGIN_FAIL:
        return {...state};
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
            isAuthenticated: false,
            loading: false
        };
      default:
        return {...state};
    }
  }