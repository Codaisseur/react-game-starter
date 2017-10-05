import React, { PureComponent } from 'react'


export class GamePlayers extends PureComponent {


  renderThisGamePlayer(players) {
    return (
      <li>
      Name: {players.name},
      ID: {players._id}
      </li>
    )
  }


 render() {
   const { players } = this.props.game




   return (
       <ul>
       Players:
        {players.map(this.renderThisGamePlayer)}
       </ul>


   )
 }
}

export default (GamePlayers)
