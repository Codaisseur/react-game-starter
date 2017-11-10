import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const GAME_CREATED = 'GAME_CREATED'
export const GAME_UPDATED = 'GAME_UPDATED'
export const GAME_REMOVED = 'GAME_REMOVED'
export const GAME_PLAYERS_UPDATED = 'GAME_PLAYERS_UPDATED'

const api = new API()

export const updating = (game_id, player_id, move) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.patch(`/games/${game_id}`, {player_id, move})
      .then(() => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
      })

      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
