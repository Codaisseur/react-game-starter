import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

const mapDispatchToProps = { push }
export class EndTurn extends PureComponent {

  handleTurn = () => {
    // test
  }


  render() {
    const { game, user } = this.props

    if(user._id !== game.playerIds[game.turn]) return null


    return(
      <div className="CreateGameButton">
        <RaisedButton
          label="End turn"
          onClick={this.handleTurn}
        />
        <br />
        <br />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(EndTurn)
