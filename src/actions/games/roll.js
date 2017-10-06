import API from '../../api'
import { LOAD_ERROR } from '../loading'

export const ROLL = 'ROLL'

const api = new API()

export default (gameId) => {
  return (dispatch) => {

    const backend = api.service('games')

    api.authenticate()
      .then(() => {
        backend.patch(gameId, { type: ROLL })
          .catch((error) => {
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
