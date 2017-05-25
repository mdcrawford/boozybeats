import React, { Component } from 'react';
import './App.css';
// let Sidebar = require('./Sidebar.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello World!
        </h1>
        <Sidebar />
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      // TODO
      <p> Hello </p>
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
