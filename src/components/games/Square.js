import React, { PureComponent } from 'react';
import './Square.css'

class Square extends PureComponent {
  render() {
    return (
      <div className="Square">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Square;
