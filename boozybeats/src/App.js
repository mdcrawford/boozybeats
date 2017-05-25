import React, { Component } from 'react';
import './App.css';
import logo from './boozybeats.png';

// let Sidebar = require('./Sidebar.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Legalese />
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      // TODO
      
      <div className="Sidebar">
        <img className="Logo" src={logo} />
        <h1 className="SiteName"> BOOZY BEATS </h1>
        <hr />
        <div className="Links">
          <h4 className="HomeLink"> HOME </h4>
          <hr color="black"/>
          <h4> ABOUT US </h4>
          <hr color="black"/>
          <h4> SOURCES </h4>
        </div>
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
      <div className="Legalese">
        <p> Made for HackCville's Launch program.  Please use responsibly. </p>
      </div>
    );
  }
}

export default App;
