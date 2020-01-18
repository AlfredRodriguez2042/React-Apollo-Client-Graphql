import { USER_LOADED, USER_LOGIN_ERROR, USER_LOADING } from './types'

export const signIn = user => {
  return dispatch => {
    try {
      dispatch({
        type: USER_LOADED,
        payload: user
      })
      console.log('llego', user)
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error.response.data
      })
    }
  }
}
