import React, {Component} from 'react';
import axios from 'axios';
import classTag from './JSON/classToTagArray.json';

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
    var beerClass = this.getBeerClass(beerInfo); // 1, 2, or 3
    var tag = this.getTagOfClass(beerClass, beerInfo.name); // currently returns index 0
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

  getBeerClass(beer) {
    if (beer.abv < 5) {
      return 1;
    }
    if (beer.abv < 8) {
      return 2;
    }
    return 3;
  }

  getTagOfClass(beerClass, beerName) {
    let classSize = 0;
    switch (beerClass) {
      case 1:
        classSize = this.getClassSize(beerClass);
        return classTag.class1[this.getIndexOfClass(beerName, classSize)];

      case 2:
        classSize = this.getClassSize(beerClass);
        return classTag.class2[this.getIndexOfClass(beerName, classSize)];

      case 3:
        classSize = this.getClassSize(beerClass);
        return classTag.class3[this.getIndexOfClass(beerName, classSize)];
    }
  }

  getClassSize(className) {
    switch(className) {
      case 1:
        return classTag.class1.length;
      case 2:
        return classTag.class2.length;
      case 3:
        return classTag.class3.length;
    }
  }

  getIndexOfClass(beerName, classSize) {
    var total=0;
    for (let i = 0; i < beerName.length; i++){
        total += beerName.charCodeAt(i) * i;
    }
    return total % classSize;
  }

  render() {
    let description = <div />;
        
        if (this.state.beerInfo.description != undefined) {
            description = <h5>{this.state.beerInfo.description} </h5>
        }

    return (
      <div className="drinkToMusic">
        <h4 className="searchText"> Paired your {this.state.beerInfo.name}</h4>
        <h4 className="searchTextMiddle">With</h4>
        <h1 className="searchText">{this.state.tag.toUpperCase()}</h1>       
        <iframe className="ytplayer" type="text/html" width="640" height="360"
          src={"https://www.youtube.com/embed?listType=search&list=" + this.state.tag + "+music"}>
        </iframe>
        {description}
      </div>
    )
  }
}

export default BeerToMusic;