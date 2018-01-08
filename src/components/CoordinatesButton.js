// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


  handleClick = (event) => {
    let cursorX = event.pageX;
    let cursorY = event.pageY;
    this.props.onReceiveCoordinates([cursorX, cursorY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;
