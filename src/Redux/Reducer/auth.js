import { USER_LOGIN_ERROR, USER_LOADED, USER_LOADING } from '../actions/types'
import jwt from 'jsonwebtoken'

const jwtstorage = localStorage.getItem('jwt')
if (jwtstorage) {
  const decoded = jwt.decode(jwtstorage)
  if ((decoded.exp = 1000 < Date.now())) {
    localStorage.removeItem('jwt')
  }
}
const initialState = {
  token: jwtstorage,
  isAuthenticated: jwtstorage ? true : false,
  isLoading: false,
  user: {},
  followings: {},
  playList: [],
  likes: {},
  errorMessage: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case USER_LOGIN_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
