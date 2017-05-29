import React, { Component } from 'react';
import logo from './images/boozybeats.png';

// The sidebar on the left of the screen.  Includes the logo and three links to the
// Home page, an About Us page, and a Sources page.
class Sidebar extends Component {
  render() {
    return (
      // TODO
      <div className="Sidebar">
        <img className="Logo" src={logo} />
        <h1 className="SiteName"> BOOZY BEATS </h1>
        <hr />
          <button className="HomeLink" onClick={this.props.onHomeClick}> HOME </button>
          <hr color="black"/>
          <button className="AboutUsLink" onClick={this.props.onAboutClick}> ABOUT US </button>
          <hr color="black"/>
          <button className="SourcesLink" onClick={this.props.onSourcesClick}> SOURCES </button>
      </div>
    );
  }
}

export default Sidebar; 