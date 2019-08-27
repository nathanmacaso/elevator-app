import React from 'react'

export default function Button(props) {
  const { activeArray, value, current, next } = props;
  let button;

  if(activeArray.includes(value)) {
    button = <button className="elevator-btn active" value={value} onClick={props.onClick}>{value === 0 ? 'B' : value}</button>
  }else {
    button = <button className="elevator-btn" value={value} onClick={props.onClick}>{value === 0 ? 'B' : value}</button>
  }

  if(current === value) {
    button = <button className="elevator-btn current" value={value} >{value === 0 ? 'B' : value}</button>
  }

  if(next === value) {
    button = <button className="elevator-btn next" value={value} >{value === 0 ? 'B' : value}</button>
  }

  return (
    <div className="flex-button">
        {button}
    </div>
  )
}
