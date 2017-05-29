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
        drinkToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    }
  }

  onHomeClick() {
    // change state to load home page
    this.setState({
      pages: {
        home: true,
        about: false,
        sources: false,
        musicToDrink: false,
        drinkToMusic: false,
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
        drinkToMusic: false,
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
        drinkToMusic: false,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onBeerClick() {
    // change state to load the drinkToMusic page
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: false,
        musicToDrink: false,
        drinkToMusic: true,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onWineClick() {
    // TODO
    this.setState({
      pages: {
        home: false,
        about: false,
        sources: false,
        musicToDrink: false,
        drinkToMusic: true,
      },
      beerSearchTerm: "",
      wineSearchTerm: "",
      artistSearchTerm: "",
    });
  }

  onArtistClick() {
    // TODO
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
      artistSearchTerm: "",
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          onHomeClick={() => this.onHomeClick()}
          onAboutClick={() => this.onAboutClick()}
          onSourcesClick={() => this.onSourcesClick()}
        />
        <Legalese />
        <MainScreen pages={this.state.pages} />
      </div>
    );
  }
}






export default App;
