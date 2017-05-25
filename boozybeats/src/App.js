import React, { Component } from 'react';
import './App.css';
import logo from './beerbeats.png';

// let Sidebar = require('./Sidebar.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      // TODO
      <div className="Sidebar">
        <img className="Logo" src={logo} width="200" height="200" />
        <p className="SiteName"> BOOZY BEATS </p>
        <hr />
        <table className="Links" width="100">
          <tr> <th> HOME </th> </tr>
          <tr> <th> ABOUT US </th> </tr>
          <tr> <th> SOURCES </th> </tr>
        </table>
        <svg height="100%">
        </svg>
      </div>
    );
  }
}

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
    }
  }

  render() {
    return (
      // TODO
      <div className="SearchField">
      </div>
    );
  }

}

class Title extends Component {
  render() {
    return (
      // TODO
      <p> Hello </p>
    );
  }
}

class Legalese extends Component {
  render() {
    return (
      // TODO
      <p> Hello </p>
    );
  }
}

export default App;
