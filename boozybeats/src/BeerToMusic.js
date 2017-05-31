import React, {Component} from 'react';
import axios from 'axios';

// BeerToMusic
class BeerToMusic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beerName: "",
      beerDescription: "",
      
    }
  }

  _saveQuery = response => {
    let beerInfo = response.data.data[0];
    this.setState({
      beerInfo: beerInfo
    })
    console.log(beerInfo);
  };

  componentWillMount() {
    // create the url
    let url = "https://api.brewerydb.com/v2/search?q=" + this.props.beerSearchTerm + "&type=beer&key=0ea03bf9f68fcb5afd0b63a619e06d51&format=json";

    // make the axios request
    axios.get(url)
      .then(this._saveQuery)
  }

  render() {
    return (
      <div className="drinkToMusic">
        <p> Beer Name: {this.props.beerSearchTerm} </p>
        <p> Wine Name: {this.props.wineSearchTerm} </p>
      </div>
    )
  }
}

export default BeerToMusic;