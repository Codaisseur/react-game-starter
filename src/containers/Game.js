import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import Dice from '../components/games/rocksandroll/Dice'

import JoinButton from '../components/games/JoinButton'


class Game extends PureComponent {
  componentWillMount() {
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gameId } = this.props.match.params

    if (!game) fetchGames()
    getCurrentGame(gameId)
    if (!subscribed) subscribeToGames()
  }

  render() {
    const { game } = this.props

    if (!game) return null

    return (
      <div className="Game">
        <h1>Game!</h1>
<<<<<<< HEAD
        <p>test</p>
        <Dice />
||||||| merged common ancestors
        <p>test</p>
=======

        <div><JoinButton game={game} /></div>

>>>>>>> 5d7948a71946afbddc17f3ec84f71bc0c83f2cb9
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  const currentPlayer = currentUser._id
  // const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]
  // later naar kijken voor multiplayer

  return {
    currentPlayer,
    game,
    hasTurn: currentPlayer && currentPlayer._id === currentUser._id,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(Game)
