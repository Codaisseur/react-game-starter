import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateScore from '../actions/games/updatescore'
import turnResult from './Dice'

//this contains all the logic so not to be romved
class Scoresheet extends PureComponent {

  static propTypes = {
    turnResult: PropTypes.array.isRequired, default: [1, 2, 3, 4, 5],
  }



  addOnes(event){
    return this.props.updateScore = (turnResult.filter(number => number === 1)).reduce((result, ones) => result + ones)
  }

  addTwos(event) {
    return this.props.updateScore = (turnResult.filter(number => number === 2)).reduce((result, twos) => result + twos)
  }

  addThrees() {
    return this.props.updateScore = (turnResult.filter(number => number === 3)).reduce((result, threes) => result + threes)
  }

  addFours() {
    return this.props.updateScore = (turnResult.filter(number => number === 4)).reduce((result, fours) => result + fours)
  }

  addFives() {
    return this.props.updateScore = (turnResult.filter(number => number === 5)).reduce((result, fives) => result + fives)
  }

  addSixes() {
    return this.props.updateScore = (turnResult.filter(number => number === 6)).reduce((result, sixes) => result + sixes)
  }

  hasThreeOfaKind(){
    var sortedTurnResult = turnResult.sort()
    return ((sortedTurnResult[0] === sortedTurnResult[1]) && (sortedTurnResult[0] === sortedTurnResult[2]) ||
    (sortedTurnResult[1] === sortedTurnResult[2]) && (sortedTurnResult[1] === sortedTurnResult[3])
    (sortedTurnResult[2] === sortedTurnResult[3]) && (sortedTurnResult[2] === sortedTurnResult[4]))
  }

  threeOfaKind(){
    if (hasThreeOfaKind) {
        return threeOfaKind = (turnResult.reduce((result, number) => result + number))
      }
      else {
        return threeOfaKind = 0
      }
  }

  carre() {
    if (
      (turnResult.filter(number => number === 1)).length >= 4 ||
      (turnResult.filter(number => number === 2)).length >= 4 ||
      (turnResult.filter(number => number === 3)).length >= 4 ||
      (turnResult.filter(number => number === 4)).length >= 4 ||
      (turnResult.filter(number => number === 5)).length >= 4 ||
      (turnResult.filter(number => number === 6)).length >= 4) {
        return carre = (turnResult.reduce((result, number) => result + number))
      }
      else {
        return carre = 0
      }
  }

  fullHouse() {
    var sortedTurnResult = turnResult.sort()
    if (
      ((sortedTurnResult[0] === sortedTurnResult[1]) && (sortedTurnResult[0] === sortedTurnResult[2]) &&
      (sortedTurnResult[3] === sortedTurnResult[4])) ||
      ((sortedTurnResult[0] === sortedTurnResult[1]) &&
      (sortedTurnResult[2] === sortedTurnResult[3]) && (sortedTurnResult[2] === sortedTurnResult[4]))
    ) {
      return fullHouse = 25
    }

    else {
      return fullHouse = 0
    }
  }

  smallStreet() {
    unDoubled = turnResult.filter(function(number, index, self) {
      return index == self.indexOf(number);
    })

    if ((unDoubled[0] === 1 && unDoubled[1] === 2 && unDoubled[2] === 3 && unDoubled[3] === 4 ) ||
    (unDoubled[0] === 2 && unDoubled[1] === 3 && unDoubled[2] === 4 && unDoubled[3] === 5 ) ||
    (unDoubled[0] === 3 && unDoubled[1] === 4 && unDoubled[2] === 5 && unDoubled[3] === 6 ) ||
    (unDoubled[1] === 1 && unDoubled[2] === 2 && unDoubled[3] === 3 && unDoubled[4] === 4 ) ||
    (unDoubled[1] === 2 && unDoubled[2] === 3 && unDoubled[3] === 4 && unDoubled[4] === 5 ) ||
    (unDoubled[1] === 3 && unDoubled[2] === 4 && unDoubled[3] === 5 && unDoubled[4] === 6 ))
    {
      return smallStreet = 30
    }
    else
    {
      return smallStreet = 0
    }
  }

  largeStreet(){
    var largeStreet1 = [1, 2, 3, 4, 5];
    var largeStreet2 = [2, 3, 4, 5, 6];

    if ((turnResult.every(function(element, index) {
        return element === largeStreet1[index] })) === true ||
        (turnResult.every(function(element, index) {
        return element === largeStreet2[index]  })) === true) {
          return largeStreet = 40
        }
    else {
      return largeStreet = 0
    }
  }

  yahtzee(){
    if (
      (turnResult.filter(number => number === 1)).length === 5 ||
      (turnResult.filter(number => number === 2)).length === 5 ||
      (turnResult.filter(number => number === 3)).length === 5 ||
      (turnResult.filter(number => number === 4)).length === 5 ||
      (turnResult.filter(number => number === 5)).length === 5||
      (turnResult.filter(number => number === 6)).length === 5) {
        return yahtzee = 50
      }
      else {
        return yahtzee = 0
      }
  }

  chance(){
    return chance = (turnResult.reduce((result, number) => result + number))
  }


  render(){
    const currentOnes = this.props.ones
    const currentTwos = this.props.twos
    const currentThrees = this.props.threes
    const currentFours = this.props.fours
    const currentFives = this.props.fives
    const currentSixes = this.props.sixes
    const currentTotalTop = this.props.totalTop
    const currenBonus = this.props.bonus
    const currentThreeOfaKind = this.props.threeOfaKind
    const currentCarre = this.props.carre
    const currentFullHouse = this.props.fullHouse
    const currentSmallStreet = this.props.smallStreet
    const currentLargeStreet = this.props.largeStreet
    const currentYahtzee = this.props.yahtzee
    const currentChance = this.props.chance
    const currentTotalBottom = this.props.totalBottom
    const currentTotal = this.props.total

    function totalTop() {
      return totalTop = ones + twos + threes + fours + fives + sixes
    }

    function bonus() {
      if (totalTop >= 63) {
        return 35
      }
      else {
        return 0
      }
    }

    function totalBottom() {
      return totalBottom = threeOfaKind + carre + fullHouse + smallStreet + largeStreet + yahtzee + chance
    }

    function total() {
      return total = totalTop + bonus + totalBottom
    }


    return
    <div>
      <div>
      <button
        label="Add Ones"
        onClick={this.addOnes.bind(this)}>
        Ones
        </button>
        <h1>{currentOnes}</h1>
      </div>

      <div>
      <button
        label="Add Twos"
        onClick={this.addTwos.bind(this)}>
        Twos
        </button>
        <h1>{currentTwos}</h1>
      </div>

      <div>
      <button
        label="Add Threes"
        onClick={this.addThrees.bind(this)}>
        Threes
        </button>
        <h1>{currentThrees}</h1>
      </div>

      <div>
      <button
        label="Add Fours"
        onClick={this.addFours.bind(this)}>
        Fours
        </button>
        <h1>{currentFours}</h1>
      </div>

      <div>
      <button
        label="Add Fives"
        onClick={this.addFives.bind(this)}>
        Fives
        </button>
        <h1>{currentFives}</h1>
      </div>

      <div>
      <button
        label="Add Sixes"
        onClick={this.addSixes.bind(this)}>
        Sixes
        </button>
        <h1>{currentSixes}</h1>
      </div>

      <div>
      <h1>Total Top {currentTotalTop}</h1>
      </div>

      <div>
      <h1>Bonus: {currenBonus}</h1>
      </div>

      <div>
      <button
        label="Add threeOfaKind"
        onClick={this.threeOfaKind.bind(this)}>
        Three of a Kind
        </button>
        <h1>{currentThreeOfaKind}</h1>
      </div>

      <div>
      <button
        label="Add Carre"
        onClick={this.carre.bind(this)}>
        Carre
        </button>
        <h1>{currentCarre}</h1>
      </div>

      <div>
      <button
        label="Add fullHouse"
        onClick={this.fullHouse.bind(this)}>
        FullHouse
        </button>
        <h1>{currentFullHouse}</h1>
      </div>

      <div>
      <button
        label="Add smallStreet"
        onClick={this.smallStreet.bind(this)}>
        Small Street
        </button>
        <h1>{currentSmallStreet}</h1>
      </div>

      <div>
      <button
        label="Add largeStreet"
        onClick={this.largeStreet.bind(this)}>
        Large Street
        </button>
        <h1>{currentLargeStreet}</h1>
      </div>

      <div>
      <button
        label="Add Yahtzee"
        onClick={this.yahtzee.bind(this)}>
        Yahtzee
        </button>
        <h1>{currentYahtzee}</h1>
      </div>

      <div>
      <button
        label="Add chance"
        onClick={this.chance.bind(this)}>
        Chance
        </button>
        <h1>{currentChance}</h1>
      </div>

      <div>
      <h1>Total Bottom: {currentTotalBottom}</h1>
      </div>

      <div>
      <h1>Total {currentTotal}</h1>
      </div>
    </div>
  }
}

const mapStateToProps = ({ones, twos, threes, fours, fives, sixes, totalTop, bonus, threeOfaKind, carre, fullHouse,
  smallStreet, largeStreet, yahtzee, chance, totalBottom, total }) => ({ones, twos, threes, fours, fives, sixes,
  totalTop, bonus, threeOfaKind, carre, fullHouse, smallStreet, largeStreet, yahtzee, chance, totalBottom, total })

  const mapDispatchToProps = { updateScore }

export default connect(mapStateToProps, mapDispatchToProps)(Scoresheet)
