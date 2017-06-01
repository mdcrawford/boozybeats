import React, {Component} from 'react';
import axios from 'axios';
import classTag from './JSON/classToTag.json';

// BeerToMusic
class BeerToMusic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beerInfo: {
        name: "",
        description:""
      },
      tag:""
    }
  }

  _saveQuery = response => {
    let beerInfo = response.data.data[0];
    var beerClass1=this.getBeerClass(beerInfo);
    var tag=this.getTagOfClass(beerClass1);
    this.setState({
      beerInfo: beerInfo,
      tag: tag
    })
  };

  componentWillMount() {
    // create the url
    let url = "https://api.brewerydb.com/v2/search?q=" + this.props.beerSearchTerm + "&type=beer&key=0ea03bf9f68fcb5afd0b63a619e06d51&format=json";

    // make the axios request
    axios.get(url)
      .then(this._saveQuery)
  }

  getBeerClass(beer){
    if(beer.abv<5){
      return 1;
    }
    if(beer.abv<8){
      return 2;
    }
    return 3;
  }

  getTagOfClass(beerClass){
    switch (beerClass){
      case 1:
        return classTag.class1[0];
      case 2:
        return classTag.class2[0];
      case 3:
        return classTag.class3[0];
    }
  }

  render() {
    return (
      <div className="drinkToMusic">
        <p> Beer Name: {this.state.beerInfo.name}</p>
        <p> Beer Name: {this.state.beerInfo.description}</p>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
          src={"https://www.youtube.com/embed?listType=search&list=" + this.state.tag + "+music"}>
        </iframe>
      </div>
    )
  }
}

export default BeerToMusic;