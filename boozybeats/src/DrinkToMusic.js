import React, {Component} from 'react';

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