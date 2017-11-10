import React, { PureComponent } from 'react'
import Board from "./Board"

class GameTTT extends PureComponent {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board board={this.props.board} game={this.props.game} player={this.props.player}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default GameTTT
