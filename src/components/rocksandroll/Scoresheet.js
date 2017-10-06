import React from 'react'

export class Scoresheet extends PureComponent {

  addOnes(){
    return ones = (turnResult.filter(number => number === 1)).reduce((result, ones) => result + ones)
  }

  addTwos() {
    return twos = (turnResult.filter(number => number === 2)).reduce((result, twos) => result + twos)
  }

  addThrees() {
    return threes = (turnResult.filter(number => number === 3)).reduce((result, threes) => result + threes)
  }

  addFours() {
    return fours = (turnResult.filter(number => number === 4)).reduce((result, fours) => result + fours)
  }

  addFives() {
    return fives = (turnResult.filter(number => number === 5)).reduce((result, fives) => result + fives)
  }

  addSixes() {
    return sixes = (turnResult.filter(number => number === 6)).reduce((result, sixes) => result + sixes)
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
    const ones = 0
    const twos = 0
    const threes = 0
    const fours = 0
    const fives = 0
    const sixes = 0
    const totalTop = 0
    const bonus = 0
    const threeOfaKind = 0
    const carre = 0
    const fullHouse = 0
    const smallStreet = 0
    const largeStreet = 0
    const yahtzee = 0
    const chance = 0
    const totalBottom = 0
    const total = 0

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
      return total = totalTop + bonus+ totalBottom
    }
    

    return
    <div>
      <div>
      <button
        label="Add Ones"
        onClick={this.addOnes.bind(this)}>
        Ones
        </button>
        <h1>{ones}</h1>
      </div>

      <div>
      <button
        label="Add Twos"
        onClick={this.addTwos.bind(this)}>
        Twos
        </button>
        <h1>{twos}</h1>
      </div>

      <div>
      <button
        label="Add Threes"
        onClick={this.addThrees.bind(this)}>
        Threes
        </button>
        <h1>{threes}</h1>
      </div>

      <div>
      <button
        label="Add Fours"
        onClick={this.addFours.bind(this)}>
        Fours
        </button>
        <h1>{fours}</h1>
      </div>

      <div>
      <button
        label="Add Fives"
        onClick={this.addFives.bind(this)}>
        Fives
        </button>
        <h1>{fives}</h1>
      </div>

      <div>
      <button
        label="Add Sixes"
        onClick={this.addSixes.bind(this)}>
        Sixes
        </button>
        <h1>{sixes}</h1>
      </div>

      <div>
      <h1>Total Top {totalTop}</h1>
      </div>

      <div>
      <h1>Bonus: {bonus}</h1>
      </div>

      <div>
      <button
        label="Add threeOfaKind"
        onClick={this.threeOfaKind.bind(this)}>
        Three of a Kind
        </button>
        <h1>{threeOfaKind}</h1>
      </div>

      <div>
      <button
        label="Add Carre"
        onClick={this.carre.bind(this)}>
        Carre
        </button>
        <h1>{carre}</h1>
      </div>

      <div>
      <button
        label="Add fullHouse"
        onClick={this.fullHouse.bind(this)}>
        FullHouse
        </button>
        <h1>{fullHouse}</h1>
      </div>

      <div>
      <button
        label="Add smallStreet"
        onClick={this.smallStreet.bind(this)}>
        Small Street
        </button>
        <h1>{smallStreet}</h1>
      </div>

      <div>
      <button
        label="Add largeStreet"
        onClick={this.largeStreet.bind(this)}>
        Large Street
        </button>
        <h1>{largeStreet}</h1>
      </div>

      <div>
      <button
        label="Add Yahtzee"
        onClick={this.yahtzee.bind(this)}>
        Yahtzee
        </button>
        <h1>{yahtzee}</h1>
      </div>

      <div>
      <button
        label="Add chance"
        onClick={this.chance.bind(this)}>
        Chance
        </button>
        <h1>{chance}</h1>
      </div>

      <div>
      <h1>Total Bottom: {totalBottom}</h1>
      </div>

      <div>
      <h1>Total {total}</h1>
      </div>
    </div>
  }
}

export Scoresheet
