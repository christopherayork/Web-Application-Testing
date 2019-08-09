import React from 'react';
import Display from './Display';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
      hits: 0
    };

  }

  addBall() {
    if(this.state.balls + 1 >= 4) this.setState({balls: 0, strikes: 0});
    else this.setState({balls: this.state.balls + 1});
  }

  addStrike() {
    if (this.state.strikes + 1 >= 3) this.setState({balls: 0, strikes: 0});
    else this.setState({strikes: this.state.strikes + 1});
  }

  addFoul() {
    if(this.state.strikes + 1 > 2) return false;
    else this.setState({strikes: this.state.strikes + 1});
  }

  addHit() {
    this.setState({balls: 0, strikes: 0, hits: this.state.hits + 1});
  }


  render() {
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} hits={this.state.hits} />
        <div>
          <button onClick={() => this.addBall()}>Add Ball</button>
          <button onClick={() => this.addStrike()}>Add Strike</button>
          <button onClick={() => this.addFoul()}>Add Foul</button>
          <button onClick={() => this.addHit()}>Add Hit</button>
        </div>
      </div>
    );
  }

}