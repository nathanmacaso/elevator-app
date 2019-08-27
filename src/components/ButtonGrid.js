import React, { Component } from 'react'
import Button from './Button';

export default class ButtonGrid extends Component {

  renderButtons = (i) => {
    const { onClick, stops, current, next } = this.props;
    return(
      <Button key={i} value={i} onClick={onClick} activeArray={stops} current={current} next={next}/>
    );
  }

  render() {
    const { current, next} = this.props;
    return (
      <div className="centered">
        <div className="floor-display">
          <h1 className="floor-number">{ !next ? current : next }</h1>
        </div>
        <div className="flex-button-row">
          {this.renderButtons(6)}
          {this.renderButtons(7)}
          {this.renderButtons(8)}
        </div>
        <div className="flex-button-row">
          {this.renderButtons(3)}
          {this.renderButtons(4)}
          {this.renderButtons(5)}
        </div>
        <div className="flex-button-row">
          {this.renderButtons(0)}
          {this.renderButtons(1)}
          {this.renderButtons(2)}
        </div>
      </div>
    )
  }
}
