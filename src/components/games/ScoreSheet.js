import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../containers/Game.css'


export class ScoreSheet extends PureComponent {






 render() {
   const {  game, scoreSheet, currentUser } = this.props
   const playerIds = game.playerIds
   const currentUserIndex = playerIds.indexOf(currentUser._id)
   const currentUserScoresheet = scoreSheet[currentUserIndex]



   if (!playerIds.includes(currentUser._id)) return null;



   return (

     <div className='scoresheety'>
     <h1>This is {currentUserScoresheet.title}</h1>
     <h4>Ones: {currentUserScoresheet.ones}</h4>
     <h4>Twos: {currentUserScoresheet.twos}</h4>
     <h4>Threes: {currentUserScoresheet.threes}</h4>
     <h4>Fours: {currentUserScoresheet.fours}</h4>
     <h4>Fives: {currentUserScoresheet.fives}</h4>
     <h4>Sixes: {currentUserScoresheet.sixes}</h4>
     <p>-------------</p>
     <h4>Total score top part: {currentUserScoresheet.totalTop}</h4>
     <h4>Will you get the Bonus?: {currentUserScoresheet.bonus}</h4>
     <p>-------------</p>
     <h4>Three of a Kind: {currentUserScoresheet.threeOfaKind}</h4>
     <h4>Carre: {currentUserScoresheet.carre}</h4>
     <h4>Fullhouse: {currentUserScoresheet.fullHouse}</h4>
     <h4>Small Street: {currentUserScoresheet.smallStreet}</h4>
     <h4>Large Street: {currentUserScoresheet.largeStreet}</h4>
     <h4>Yathzee: {currentUserScoresheet.yahtzee}</h4>
     <h4>Chance: {currentUserScoresheet.chance}</h4>
      <p>-------------</p>
     <h4>Total score bottom part: {currentUserScoresheet.totalBottom}</h4>
     <h4>Total score: {currentUserScoresheet.totalComplete}</h4>


     </div>



   )
 }
}



const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(ScoreSheet)
