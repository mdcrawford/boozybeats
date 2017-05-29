import React, {Component} from 'react';

// DrinkToMusic
class DrinkToMusic extends Component {
  render() {
    return (
      <div className="drinkToMusic">
        <p> Beer Name: {this.props.beerSearchTerm} </p>
        <p> Wine Name: {this.props.wineSearchTerm} </p>
      </div>
    )
  }
}

export default DrinkToMusic;