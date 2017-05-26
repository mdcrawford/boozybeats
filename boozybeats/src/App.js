import React, { Component } from 'react';
import './App.css';
import logo from './boozybeats.png';

// let Sidebar = require('./Sidebar.js');

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
        <div className="Links">
          <h4 className="HomeLink" onClick={this.props.onHomeClick}> HOME </h4>
          <hr color="black"/>
          <h4 className="AboutUsLink" onClick={this.props.onAboutClick}> ABOUT US </h4>
          <hr color="black"/>
          <h4 className="SourcesLink" onClick={this.props.onSourcesClick}> SOURCES </h4>
        </div>
      </div>
    );
  }
}

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

// Bottom of the screen.  Meant to display the kind of stuff you'd find at the bottom of a
// webpage.
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



// -------------------------------------- //
// - The five possible states for Home -  //
// - Only one will ever render anything - //
// -             at once.               - //
// -------------------------------------- //

// Home
class Home extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    return (
      <div className="Home">
        <p> Home Page </p>
      </div>
    )
  }
}

// About
class About extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    return (
      <div className="About">
        <p> About Page </p>
      </div>
    )
  }
}

// Sources
class Sources extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    return (
      <div className="Sources">
        <p> Sources Page </p>
      </div>
    )
  }
}

// musicToDrink
class musicToDrink extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    return (
      <div className="musicToDrink">
      </div>
    )
  }
}

// DrinkToMusic
class drinkToMusic extends Component {
  render() {
    return (
      <div className="drinkToMusic">
      </div>
    )
  }
}

export default App;
