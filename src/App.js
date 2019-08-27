import React, { Component } from 'react';
import Elevator from './components/Elevator';
import ButtonGrid from './components/ButtonGrid';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      stops: [],
      current: 0,
      moving: false,
      next: '',
    }
  }
  
  handleButtonClick = async (e) => {
    const { stops } = this.state;
    const stop = parseInt(e.target.value);
    stops.push(stop);
    this.setState({ stops });

    // trigger start of elevator after 3 seconds
    setTimeout(() => {
      this.startElevator()
    }, 3000);
  }

  startElevator = () => {
    const { stops, current } = this.state;
    const copyStops = [...stops];
    const stop = copyStops.shift()
    let counter = current; 

    if(current < stop ) {
      counter = current + 1;
      this.int = setInterval(() => {
        if(counter === stop) {
          console.log('repeat')
          this.setState({ current: stop, stops: copyStops, next: null, moving: true });
          clearInterval(this.int);
        }else {
          this.setState({ next: counter, current: null });
          counter ++;
        }
      }, 1000);
    }

    if(current > stop) {
      counter = current - 1;
      this.int = setInterval(() => {
        if(counter === stop) {
          this.setState({ current: stop, next: null, stops });
          clearInterval(this.int);
        }else {
          this.setState({ next: counter, stops: [stop], current: null });
          counter --;
        }
      }, 1000);
    }
  }

  render() {
    const { stops, current, next, moving } = this.state;
    console.log(this.state);

    return (
      <div className="App">
        <div className="elevator-container">
          <Elevator current={current} moving={moving}/>
        </div>
        <div className="button-grid-container">
          <ButtonGrid onClick={this.handleButtonClick} stops={stops} current={current} next={next} />
        </div>
      </div>
    );
  }
}
