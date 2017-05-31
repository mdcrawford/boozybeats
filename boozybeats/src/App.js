import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import MainScreen from './MainScreen.js';
import Legalese from './Legalese.js';
import './App.css';

// The entire App.  Renders everything.  What gets exported to the ReactDOM.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {
        home: true,
        about: false,
        sources: false,
        musicToDrink: false,
        beerToMusic: false,
        wineToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    }
  }

  // The different click methods to be passed around.  Can probably consolidate
  // these later??

  onHomeClick() {
    // change state to load home page
    this.setState({
      pages: {
        home: true,
        about: false,
        sources: false,
        musicToDrink: false,
        beerToMusic: false,
        wineToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onAboutClick() {
    // change state to load about page
    this.setState({
      pages: {
        home: false,
        about: true,
        sources: false,
        musicToDrink: false,
        beerToMusic: false,
        wineToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onSourcesClick() {
    // change state to load the sources page
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: true,
        musicToDrink: false,
        beerToMusic: false,
        wineToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onBeerClick(beerName) {
    // change state to load the DrinkToMusic page
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: false,
        musicToDrink: false,
        beerToMusic: true,
        wineToMusic: false,
      },
      beerSearchTerm: beerName,
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onWineClick(wineName) {
    // change state to load the DrinkToMusic page
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: false,
        musicToDrink: false,
        beerToMusic: false,
        wineToMusic: true,
      },
      beerSearchTerm: "",
      wineSearchTerm: wineName,
      artistSearchTerm: "",
    });
  }

  onArtistClick(artistName) {
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: false,
        musicToDrink: true,
        drinkToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: artistName,
    });
  }

  //

  render() {
    return (
      <div className="App">
        <Sidebar 
          onHomeClick={() => this.onHomeClick()}
          onAboutClick={() => this.onAboutClick()}
          onSourcesClick={() => this.onSourcesClick()}
        />
        <Legalese />
        <MainScreen 
          pages={this.state.pages}
          onBeerClick={(beer) => this.onBeerClick(beer)}
          onWineClick={(wine) => this.onWineClick(wine)}
          onArtistClick={(artist) => this.onArtistClick(artist)}
          beerSearchTerm={this.state.beerSearchTerm}
          wineSearchTerm={this.state.wineSearchTerm}
          artistSearchTerm={this.state.artistSearchTerm}
        />
      </div>
    );
  }
}


export default App;
