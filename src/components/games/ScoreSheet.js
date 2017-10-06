import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../containers/Game.css'
import {Card, CardTitle, CardText} from 'material-ui/Card';

export class ScoreSheet extends PureComponent {

  bonus() {
    const {  game, scoreSheet, currentUser } = this.props
    const playerIds = game.playerIds
    const currentUserIndex = playerIds.indexOf(currentUser._id)
    const currentUserScoresheet = scoreSheet[currentUserIndex]

    if (currentUserScoresheet.bonus === true) return "35"
    else return "0"
  }

  render() {
    const {  game, scoreSheet, currentUser } = this.props
    const playerIds = game.playerIds
    const currentUserIndex = playerIds.indexOf(currentUser._id)
    const currentUserScoresheet = scoreSheet[currentUserIndex]

    if (!playerIds.includes(currentUser._id)) return null;

    return (
      <div className="scoreSheety">
        <Card>
          <CardTitle title={currentUserScoresheet.title} subtitle="Rock & Roll, baby" />
          <CardText>
          Ones: {currentUserScoresheet.ones}<br />
          Twos: {currentUserScoresheet.twos}<br />
          Threes: {currentUserScoresheet.threes}<br />
          Fours: {currentUserScoresheet.fours}<br />
          Fives: {currentUserScoresheet.fives}<br />
          Sixes: {currentUserScoresheet.sixes}<br />
          </CardText>
          <CardTitle title={currentUserScoresheet.totalTop} subtitle="Total Top Score" />
          <CardTitle title={this.bonus()} subtitle="Bonus if you make 63 points up top!" />
          <CardText>
          Three of a Kind: {currentUserScoresheet.threeOfaKind}<br />
          Carre: {currentUserScoresheet.carre}<br />
          Fullhouse: {currentUserScoresheet.fullHouse}<br />
          Small Street: {currentUserScoresheet.smallStreet}<br />
          Large Street: {currentUserScoresheet.largeStreet}<br />
          Yathzee: {currentUserScoresheet.yahtzee}<br />
          Chance: {currentUserScoresheet.chance}<br />
          </CardText>
          <CardTitle title={currentUserScoresheet.totalBottom} subtitle="Total Bottom Score" />
          <CardTitle title={currentUserScoresheet.totalComplete} subtitle="Total Score" />
        </Card>
        <br />
      </div>

   )
 }
}



const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(ScoreSheet)
