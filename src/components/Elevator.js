import React, { Component } from 'react'

export default class Elevator extends Component {
  
  render() {
    const { current, moving } = this.props;

    return (
      <div className="elevator-wrapper">
         <div className={ current ? 'elevator-door-left elevator-door' : 'elevator-door'}>

          </div>
          <div className={ moving ? `elevator-${current} elevator` : ''}>
            
          </div>
          <div className={ current ? 'elevator-door-right elevator-door' : 'elevator-door'}>
            
          </div>

      </div>
    )
  }
}
