// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Riddle from './Riddle'
import fetchRiddles from '../../actions/riddles/fetchRiddles'


const PLACEHOLDER = 'Riddles Riddles Riddles'

export class Question extends PureComponent {
  static propTypes = {
    riddles: PropTypes.string.isRequired,
    fetchRiddles: PropTypes.func.isRequired,

  }

componentWillMount() {
        this.props.fetchRiddles()
      }

renderRiddle(riddle, index) {
    return <Riddle
      key={index} { ...riddle } />
  }

render() {
    return(
      <article className="Question">
        <div>

          <p>{ this.props.riddles.map(this.renderRiddle.bind(this)) }</p>
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ riddles }) => ({ riddles })

export default connect(mapStateToProps, { fetchRiddles })(Question)
