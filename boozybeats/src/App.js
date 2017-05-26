import React, { Component } from 'react';
import './App.css';
import logo from './boozybeats.png';
import mike from './michael.PNG';
import youtube from './youtube.png';
import brewerydb from './brewerydb.png';
import wine from './wine.png';
import lastfm from './lastfm.png';

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
          <button className="HomeLink" onClick={this.props.onHomeClick}> HOME </button>
          <hr color="black"/>
          <button className="AboutUsLink" onClick={this.props.onAboutClick}> ABOUT US </button>
          <hr color="black"/>
          <button className="SourcesLink" onClick={this.props.onSourcesClick}> SOURCES </button>
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



// ------------------------------------------- //
// - The five possible states for MainScreen - //
// - Only one will ever render anything at   - //
// -                 once.                   - //
// ------------------------------------------- //

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
      <div>
        <h1> About </h1>
        <h3 className="About" >
          Boozy Beats is a web application designed to pair your superior music taste with your refined penchant for all things alcohol. 
          By simply entering your prefered artist for the night, Boozy Beats will automatically supply a list of recommended beverages to
          complement your sophisticated ears.  Already know what you’re drinking, but don’t like what you’re hearing?  Boozy Beats can also 
          take the name of your drink and pair it with a selective playlist curated from YouTube and Last.fm tags!
        </h3>

        <div>
          <h2 className="contact">
          Contributors:
          </h2>
          <div className="personProfile">
            <h3>
              <a href="https://github.com/mdcrawford">Michael Crawford </a>
            </h3>
            <h3>
              mdc8wa@virginia.edu
            </h3>
            <img className="Profilepic" src={mike} />
          </div>     
          <div className="personProfile">
            <h3>
              <a href="https://github.com/Starpit390">Arpit Rupakhetee </a>
            </h3>
            <h3>
              ar9cd@virginia.edu
            </h3>
            <img className="Profilepic" src={mike} alt="Michael Crawford" />
          </div>          
        </div>
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
      <div>
        <h1> Sources </h1>
        <h2 className="About">
          We would like to thank our friends at Youtube, Last.FM, Brewery DB and Wine.com. 
          This gorgeous website would not be possible without their APIs listed below:
        </h2>
        <ul className="ulList">
          <li className="listelement">
          <a href="https://developers.google.com/youtube/player_parameters"> Youtube </a>
          <a href="https://youtube.com"> <img className="apilogos" src={youtube} alt="youtube"/></a> </li>
          <li className="listelement"><a href="http://www.last.fm/api"> Last.fm </a>
          <a href="https://www.last.fm/"><img className="apilogos" src={lastfm} alt="lastfm"/></a> </li>
          <li className="listelement"><a href="http://www.brewerydb.com/developers/docs"> Brewery DB </a>
          <a href="http://www.brewerydb.com/">
          <img className="brewerydb" src={brewerydb} alt="brewerydb"/></a></li>
          <li className="listelement"><a href="https://api.wine.com/"> Wine.com </a>
          <a href= "http://www.wine.com/"><img className="apilogos" src={wine} alt="wine.com"/></a> </li>
        </ul>
        
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
        <p> Music to Drink Results </p>
      </div>
    )
  }
}

// DrinkToMusic
class drinkToMusic extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    
    return (
      <div className="drinkToMusic">
        <p> Drink to Music Results </p>
      </div>
    )
  }
}

export default App;
