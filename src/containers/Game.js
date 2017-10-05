import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import JoinDialog from '../components/games/JoinDialog'
import ScoreSheet from '../components/games/ScoreSheet'

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
        <h1>{ game.title }</h1>
        <div><JoinDialog game={game} /></div>
        <div><ScoreSheet scoreSheet ={game.scoreSheet} /></div>

      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  //const currentPlayer = currentUser._id
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]
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
