import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import D1 from '../images/dice1.png'
import D2 from '../images/dice2.png'
import D3 from '../images/dice3.png'
import D4 from '../images/dice4.png'
import D5 from '../images/dice5.png'
import D6 from '../images/dice6.png'
import D1L from '../images/dice1lock.png'
import D2L from '../images/dice2lock.png'
import D3L from '../images/dice3lock.png'
import D4L from '../images/dice4lock.png'
import D5L from '../images/dice5lock.png'
import D6L from '../images/dice6lock.png'

class Die extends PureComponent {
  static propTypes = {
    dieId: PropTypes.string,
    eyes: PropTypes.number,
    locked: PropTypes.bool,
  }

  componentWillMount() {
    this.props.fetchGames()
  }

  showDie() {
      if (this.props.eyes === 1 && this.props.locked === false) return <img src={ D1 } alt="Dice1"/>
      if (this.props.eyes === 2 && this.props.locked === false) return <img src={ D2 } alt="Dice2"/>
      if (this.props.eyes === 3 && this.props.locked === false) return <img src={ D3 } alt="Dice3"/>
      if (this.props.eyes === 4 && this.props.locked === false) return <img src={ D4 } alt="Dice4"/>
      if (this.props.eyes === 5 && this.props.locked === false) return <img src={ D5 } alt="Dice5"/>
      if (this.props.eyes === 6 && this.props.locked === false) return <img src={ D6 } alt="Dice6"/>
      if (this.props.eyes === 1 && this.props.locked === true) return <img src={ D1L } alt="Dice1lock"/>
      if (this.props.eyes === 2 && this.props.locked === true) return <img src={ D2L } alt="Dice2lock"/>
      if (this.props.eyes === 3 && this.props.locked === true) return <img src={ D3L } alt="Dice3lock"/>
      if (this.props.eyes === 4 && this.props.locked === true) return <img src={ D4L } alt="Dice4lock"/>
      if (this.props.eyes === 5 && this.props.locked === true) return <img src={ D5L } alt="Dice5lock"/>
      if (this.props.eyes === 6 && this.props.locked === true) return <img src={ D6L } alt="Dice6lock"/>
  }

  render() {
    return(
      <div className="Die">
         <p>{ this.showDie() }</p>
      </div>
    )
  }
}
const mapStateToProps = ({ currentUser, currentGame }) => ({ currentUser, currentGame })
const mapDispatchToProps = { fetchGames }

export default connect(mapStateToProps, mapDispatchToProps)(Die)
