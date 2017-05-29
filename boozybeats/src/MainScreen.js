import React, { Component } from 'react';
import Home from './Home.js';
import About from './About.js';
import Sources from './Sources.js'

// The main section of the screen.  Its render method displays the five possible versions of the
// screen, but at any given point only ONE of them is set to actually render anything.
class MainScreen extends Component {
  render() {
    return (
      // TODO
      <div className="MainScreen">
        <Home display={this.props.pages.home}/>
        <About display={this.props.pages.about}/>
        <Sources display={this.props.pages.sources}/>
      </div>
    );
  }
}

export default MainScreen;