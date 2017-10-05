import React, { PureComponent } from 'react'


export class ScoreSheet extends PureComponent {


 render() {
   const { scoreSheet } = this.props


   return (
     <div>
     <h1>This is {scoreSheet[0].title}</h1>
     </div>

   )
 }
}

export default (ScoreSheet)
