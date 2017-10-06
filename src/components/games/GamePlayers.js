import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../containers/Game.css'
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

export class GamePlayers extends PureComponent {
  secondPlayer() {
    const { players } = this.props.game

    if (players.length > 1)
      return players[1].name
    else if (players.length === 1 && !players[0] === players[1])
      return "room for you"
    else
      return "Find a rocker to roll with.."

  }

  render() {
    const { currentUser } = this.props
    const { players } = this.props.game

    return (
      <div>
        <List>
          <ListItem insetChildren={false} secondaryText="game owner" primaryText={players[0].name} />
          <ListItem insetChildren={false} secondaryText="player 2" primaryText={this.secondPlayer()} />
        </List>
          <Divider inset={false} />
        <List>
          <ListItem insetChildren={false} secondaryText="you" primaryText={currentUser.name} />
        </List>
      </div>
    )
  }
}
const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(GamePlayers)
