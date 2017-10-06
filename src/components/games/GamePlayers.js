import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


export class GamePlayers extends PureComponent {


  renderThisGamePlayer(players) {
    return (
      <li>
      Name: {players.name},
      ID: {players._id}
      </li>
    )
  }

  render() {
    const { currentUser } = this.props
    const { players } = this.props.game

    return (
      <div>
      <ul>
      Players:
      {players.map(this.renderThisGamePlayer)}
      </ul>
      <h1>You are: {currentUser.name}</h1>
      </div>
    )
  }
}
const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(GamePlayers)
