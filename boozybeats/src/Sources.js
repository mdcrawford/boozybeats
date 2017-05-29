import React, {Component} from 'react';
import youtube from './images/youtube.png';
import brewerydb from './images/brewerydb.png';
import wine from './images/wine.png';
import lastfm from './images/lastfm.png';

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

export default Sources;