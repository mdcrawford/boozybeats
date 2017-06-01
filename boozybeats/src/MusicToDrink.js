import React, {Component} from 'react';
import axios from 'axios';
import classToDrinks from './JSON/classToDrinks.json'

const lastFmApiKey = "d8cc66f2f9b40b2768bc52284b1d06c9";

// musicToDrink
class MusicToDrink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastFmResults: [],
    }
  }

  _saveQuery = response => {
    let allResults = response.data.toptags.tag;
    let tags = [];
    for (let val of allResults) {
      tags.push(val.name);
    }
    console.log(tags);
    this.setState({
      lastFmResults: tags
    })
  };

  componentWillMount() {
    // create the url
    let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=" + 
      this.props.artistSearchTerm + "&api_key=" + lastFmApiKey + "&format=json";

    // make the axios request
    axios.get(url)
      .then(this._saveQuery)
  }

  // do a request for the artist's tags and calculate their class from there
  getArtistClass(artist) {
    // TODO
  }

  // use the artist's class and name to find a drink to be displayed
  getDrinkOfClass(artistClass, artistName) {
    // TODO: TEST THIS
    //
    //
    //     SERIOUSLY TEST THIS
    //
    //
    //  DUMBASS
    let classSize = 0;
    switch (artistClass) {
      case 1:
        classSize = this.getClassSize(artistClass);
        return classToDrinks.class1[this.getIndexOfClass(artistName, classSize)];

      case 2:
        classSize = this.getClassSize(artistClass);
        return classToDrinks.class2[this.getIndexOfClass(artistName, classSize)];
      
      case 3:
        classSize = this.getClassSize(artistClass);
        return classToDrinks.class3[this.getIndexOfClass(artistName, classSize)];
    }
  }

  // find the size of the class
  getClassSize(className) {
    switch(className) {
      case 1:
        return classToDrinks.class1.length;
      case 2:
        return classToDrinks.class2.length;
      case 3:
        return classToDrinks.class3.length;
    }
  }

  // hash function to determine the index
  getIndexOfClass(artistName, classSize) {
    var total = 0;
    for (let i = 0; i < artistName.length; i++) {
      total += artistName.charCodeAt(i) * i;
    }
    return total % classSize;
  }

  render() {
    return (
      <div className="musicToDrink">
        <p> Artist Name: {this.props.artistSearchTerm} </p>
        <ul>
          {this.state.lastFmResults.map(tag => <li> {tag} </li>)}
        </ul>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
          src={"https://www.youtube.com/embed?listType=search&list=" + this.props.artistSearchTerm + "+music"}>
        </iframe>
      </div>
    )
  }
}

export default MusicToDrink