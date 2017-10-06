import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import D1 from '../../images/dice1.png'
import D2 from '../../images/dice2.png'
import D3 from '../../images/dice3.png'
import D4 from '../../images/dice4.png'
import D5 from '../../images/dice5.png'
import D6 from '../../images/dice6.png'
import '../../containers/Game.css'

function showDie(die) {
  if (die === 1) return <img className="die" src={ D1 } alt="Dice1"/>
  if (die === 2) return <img className="die" src={ D2 } alt="Dice2"/>
  if (die === 3) return <img className="die" src={ D3 } alt="Dice3"/>
  if (die === 4) return <img className="die" src={ D4 } alt="Dice4"/>
  if (die === 5) return <img className="die" src={ D5 } alt="Dice5"/>
  if (die === 6) return <img className="die" src={ D6 } alt="Dice6"/>
}

function ListItem(die) {
  return <li>{ showDie(die.value) }</li>
}

export class Dice extends PureComponent {
  render() {
    const { game } = this.props
    const dice = game.rollDice
    const listItems = dice.map((die, index) =>
        <ListItem key={index} value={die} />
      );

    return(
      <ul className="diceListy">
        {listItems}
      </ul>
    )
  }
}

export default connect(null, null)(Dice)
