import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class PositionPickerItem extends PureComponent {
  static propTypes = {
  }

  classNames() {
  }

  render() {
    return(
      <h1>
        { this.props.content }
      </h1>
    )
  }
}

export default PositionPickerItem
