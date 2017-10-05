import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import joinGame from '../../actions/games/join';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};


const mapDispatchToProps = { joinGame }

export class JoinButton extends PureComponent {

  joinGame = () => {
    const { joinGame, game } = this.props
    joinGame(game._id)
  }
  render() {

    const { game } = this.props
    if (!game.isJoinable) return null



    return (
      <div>
        <FloatingActionButton
        style={style}
        onClick={this.joinGame}>

         <ContentAdd content ='Click if you want to join this bloody game' />
         <p></p>
       </FloatingActionButton>

   </div>

 )

  }

}

export default connect(null, mapDispatchToProps)(JoinButton)
