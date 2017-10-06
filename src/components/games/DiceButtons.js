import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import roll from '../../actions/games/roll'

export class DiceButtons extends PureComponent {
  handleRoll = () => {
    const { game, roll } = this.props
    roll(game._id)
  }

  // handleUsage = () => {
  //   const { subscribe } = this.props
  //   subscribe()
  // }

  render() {
    return(
      // <div classNamme="diceOptions">
          <FlatButton
            label="Roll"
            primary={true}
            onClick={this.handleRoll}
          />
      //     <FlatButton
      //       label="Use"
      //       primary={true}
      //       onClick={this.handleUsage}
      //     />
      // </div>

    )
  }
}

const mapDispatchToProps = { roll }

export default connect(null, mapDispatchToProps)(DiceButtons)
