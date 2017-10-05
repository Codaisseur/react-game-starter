import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import D1 from '../../images/dice1.png'
import D2 from '../../images/dice2.png'
import D3 from '../../images/dice3.png'
import D4 from '../../images/dice4.png'
import D5 from '../../images/dice5.png'
import D6 from '../../images/dice6.png'
import '../../containers/Game.css'

function showDice(dice) {
  var images = dice.map(function(value){
    if (value === 1) return <img className="die" src={ D1 } alt="Dice1"/>
    if (value === 2) return <img className="die" src={ D2 } alt="Dice2"/>
    if (value === 3) return <img className="die" src={ D3 } alt="Dice3"/>
    if (value === 4) return <img className="die" src={ D4 } alt="Dice4"/>
    if (value === 5) return <img className="die" src={ D5 } alt="Dice5"/>
    if (value === 6) return <img className="die" src={ D6 } alt="Dice6"/>
  })
  return images
}

export class Dice extends PureComponent {
  render() {
    const { game } = this.props

    return(
      <div className="Dices">
         <p>{ showDice(game.rollDice) }</p>
      </div>
    )
  }
}

export default connect(null, null)(Dice)
