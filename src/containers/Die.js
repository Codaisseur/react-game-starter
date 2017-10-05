import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import D1 from '../images/dice1.png'
import D2 from '../images/dice2.png'
import D3 from '../images/dice3.png'
import D4 from '../images/dice4.png'
import D5 from '../images/dice5.png'
import D6 from '../images/dice6.png'

class Die extends PureComponent {
  componentWillMount() {
    this.props.fetchGames()
  }

  showDie() {
      if (this === 1) return <img src={ D1 } alt="Dice1"/>
      if (this === 2) return <img src={ D2 } alt="Dice2"/>
      if (this === 3) return <img src={ D3 } alt="Dice3"/>
      if (this === 4) return <img src={ D4 } alt="Dice4"/>
      if (this === 5) return <img src={ D5 } alt="Dice5"/>
      if (this === 6) return <img src={ D6 } alt="Dice6"/>
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
