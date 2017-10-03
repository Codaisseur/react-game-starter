import React from 'react'

export class Scoresheet extends PureComponent {

  addOnes(){
    return (turnResult.filter(number => number === 1)).reduce((result, ones) => result + ones)
  }

  addTwos() {
    return (turnResult.filter(number => number === 2)).reduce((result, twos) => result + twos)
  }

  addThrees() {
    return (turnResult.filter(number => number === 3)).reduce((result, threes) => result + threes)
  }

  addFours() {
    return (turnResult.filter(number => number === 4)).reduce((result, fours) => result + fours)
  }

  addFives() {
    return (turnResult.filter(number => number === 5)).reduce((result, fives) => result + fives)
  }

  addSixes() {
    return (turnResult.filter(number => number === 6)).reduce((result, sixes) => result + sixes)
  }

  // hasThreeOfaKind (){
  // return ((turnResult.filter(number => number === 1)).length >= 3 ||
  //     (turnResult.filter(number => number === 2)).length >= 3 ||
  //     (turnResult.filter(number => number === 3)).length >= 3 ||
  //     (turnResult.filter(number => number === 4)).length >= 3 ||
  //     (turnResult.filter(number => number === 5)).length >= 3 ||
  //     (turnResult.filter(number => number === 6)).length >= 3)
  // }

  harThreeOfaKind(){
    var sortedTurnResult = turnResult.sort()
    return ((sortedTurnResult[0] === sortedTurnResult[1]) && (sortedTurnResult[0] === sortedTurnResult[2]) ||
    (sortedTurnResult[1] === sortedTurnResult[2]) && (sortedTurnResult[1] === sortedTurnResult[3])
    (sortedTurnResult[2] === sortedTurnResult[3]) && (sortedTurnResult[2] === sortedTurnResult[4]))
  }

  threeOfaKind(){
    if (hasThreeOfaKind) {
        return (turnResult.reduce((result, number) => result + number))
      }
      else {
        return 0
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
        return (turnResult.reduce((result, number) => result + number))
      }
      else {
        return 0
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
      console.log(25)
    }

    else {
    console.log(0)
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
      return 30
    }
    else
    {
      return 0
    }
  }

  largeStreet(){
    var largeStreet1 = [1, 2, 3, 4, 5];
    var largeStreet2 = [2, 3, 4, 5, 6];

    if ((turnResult.every(function(element, index) {
        return element === largeStreet1[index] })) === true ||
        (turnResult.every(function(element, index) {
        return element === largeStreet2[index]  })) === true) {
          return (40)
        }
    else {
      return 0
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
        return (50)
      }
      else {
        return 0
      }
  }

  chance(){
    return (turnResult.reduce((result, number) => result + number))
  }


  render(){
    return
    <div>
    <button
      label="Add Ones"
      onClick={this.addOnes.bind(this)}>
      Ones
      </button>
    </div>
  }
}

export Scoresheet
