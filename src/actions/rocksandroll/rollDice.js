export const ROLL_DICE = 'ROLL_DICE'

export default (eyes) => {
  return {
    type: ROLL_DICE,
    payload: eyes
  }
}
