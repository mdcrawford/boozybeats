import React, {Component} from 'react';
import axios from 'axios';
import classToDrinks from './JSON/classToDrinks.json'
import classToTag from './JSON/classToTag.json'

const lastFmApiKey = "d8cc66f2f9b40b2768bc52284b1d06c9";

// musicToDrink
class MusicToDrink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastFmResults: [],
      drink: {
        name: "",
        description: "",
      }
    }
  }

  _saveQuery = response => {
    let allResults = response.data.toptags.tag;
    let tags = [];

    for (let val of allResults) {
      tags.push(val.name.toLowerCase());
    }

    let artistClass = this.getArtistClass(tags);
    let drink = this.getDrinkOfClass(artistClass, this.props.artistSearchTerm);
    
    this.setState({
      lastFmResults: tags,
      drink: drink
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
  getArtistClass(tags) {
    let total=0;
    let numValidTags = 0;
    for(let tag of tags){
      let toAdd = this.getTagsVal(tag);
      if (toAdd > 0) {
        numValidTags++;
      }
      total += toAdd;
    }

    let average = total / parseFloat(numValidTags);
    console.log(average);
    if (average < 1.7 ) {
      return 1;
    } else if ( average < 2.3 ){
      return 2;
    } else {
      return 3;
    }
  }

  getTagsVal(tag) {
    if(classToTag.class1[tag]){
      return 1;
    } else if(classToTag.class2[tag]){
      return 2;
    } else if(classToTag.class3[tag]) {
      return 3;
    }
    return 0;
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
    let description = <div />
    if (this.state.drink.description != "") {
      description = <h5> Some more info: {this.state.drink.description} </h5>
    }

    return (
      <div className="musicToDrink">
        <h4 className="searchText"> Listening to  {this.props.artistSearchTerm.toUpperCase()} ? </h4>
        <h4 className="searchText"> Pair it with some </h4>
        <h1 className="searchText"> {this.state.drink.name.toUpperCase()} </h1>

        <iframe className="ytplayer" type="text/html" width="640" height="360"
          src={"https://www.youtube.com/embed?listType=search&list=" + this.props.artistSearchTerm + "+music"}>
        </iframe>

        {description}
      </div>
    )
  }
}

export default MusicToDrink