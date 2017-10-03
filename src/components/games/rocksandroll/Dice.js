import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import D1 from '../../images/dice1.png'
import D2 from '../../images/dice2.png'
import D3 from '../../images/dice3.png'
import D4 from '../../images/dice4.png'
import D5 from '../../images/dice5.png'
import D6 from '../../images/dice6.png'
import D1L from '../../images/dice1lock.png'
import D2L from '../../images/dice2lock.png'
import D3L from '../../images/dice3lock.png'
import D4L from '../../images/dice4lock.png'
import D5L from '../../images/dice5lock.png'
import D6L from '../../images/dice6lock.png'

class Dice extends PureComponent {
  static propTypes = {
    dieId: PropTypes.number,
    number: PropTypes.number,
    locked: PropTypes.boolean,
  }

  rollDie() {
    this.props.value = Math.floor(Math.random() * 6) + 1
  }

  lockDie() {
    if (this.props.locked === true) return (this.props.locked === false)
    if (this.props.locked === false) return (this.props.locked === true)
  }

  showDie() {
      if (this.props.number === 1 && this.props.locked === false) return <img src={ D1 } alt="Dice1"/>
      if (this.props.number === 2 && this.props.locked === false) return <img src={ D2 } alt="Dice2"/>
      if (this.props.number === 3 && this.props.locked === false) return <img src={ D3 } alt="Dice3"/>
      if (this.props.number === 4 && this.props.locked === false) return <img src={ D4 } alt="Dice4"/>
      if (this.props.number === 5 && this.props.locked === false) return <img src={ D5 } alt="Dice5"/>
      if (this.props.number === 6 && this.props.locked === false) return <img src={ D6 } alt="Dice6"/>
      if (this.props.number === 1 && this.props.locked === true) return <img src={ D1L } alt="Dice1lock"/>
      if (this.props.number === 2 && this.props.locked === true) return <img src={ D2L } alt="Dice2lock"/>
      if (this.props.number === 3 && this.props.locked === true) return <img src={ D3L } alt="Dice3lock"/>
      if (this.props.number === 4 && this.props.locked === true) return <img src={ D4L } alt="Dice4lock"/>
      if (this.props.number === 5 && this.props.locked === true) return <img src={ D5L } alt="Dice5lock"/>
      if (this.props.number === 6 && this.props.locked === true) return <img src={ D6L } alt="Dice6lock"/>
  }

  render() {
    const die1 = { dieId: 1, number: 6, locked: false }

    return(
      <div>{ die1.showDie() }</div>

    )
  }
}

export default connect(null, null)(Dice)
