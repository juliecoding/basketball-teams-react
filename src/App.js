import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.moveToBench = this.moveToBench.bind(this);
    this.moveToCourt = this.moveToCourt.bind(this);
  }

  moveToBench(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    bench.push(court.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  moveToCourt(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    court.push(bench.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <List title="On Court" handleClick={this.moveToBench}
        list={this.props.players.onCourt} />
        <List title="Benched" handleClick={this.moveToCourt}
        list={this.props.players.benched} />

      </div>
    );
  }
}

  function mapStateToProps(state) {
    return state;
  }

export default connect(mapStateToProps)(App);
