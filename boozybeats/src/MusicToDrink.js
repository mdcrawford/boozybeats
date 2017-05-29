import React, {Component} from 'react';

// musicToDrink
class MusicToDrink extends Component {
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

export default MusicToDrink