import React, { Component } from 'react';
import Home from './Home.js';
import About from './About.js';
import Sources from './Sources.js';
import BeerToMusic from './BeerToMusic.js';
import MusicToDrink from './MusicToDrink.js';
import WineToMusic from './WineToMusic.js';

// The main section of the screen.  At any given point only ONE of the 5 possible
// components are rendered.
class MainScreen extends Component {
  render() {
    return (
      <div className="MainScreen">

        {this.props.pages.home ? (
          <Home 
            onBeerClick={this.props.onBeerClick}
            onWineClick={this.props.onWineClick} 
            onArtistClick={this.props.onArtistClick}
          /> 
        ) : (<div /> )}

        {this.props.pages.musicToDrink ? (
          <MusicToDrink
            artistSearchTerm={this.props.artistSearchTerm}
          /> 
        ) : ( <div /> )}

        {this.props.pages.beerToMusic ? (
          <BeerToMusic 
            beerSearchTerm={this.props.beerSearchTerm}
            wineSearchTerm={this.props.wineSearchTerm}
          /> 
        ) : ( <div /> )}

        {this.props.pages.wineToMusic ? (
          <WineToMusic 
            beerSearchTerm={this.props.beerSearchTerm}
            wineSearchTerm={this.props.wineSearchTerm}
          /> 
        ) : ( <div /> )}

        {this.props.pages.about ? (<About /> ) : ( <div /> )}

        {this.props.pages.sources ? (<Sources /> ) : ( <div /> )}

      </div>
    );
  }
}

export default MainScreen;