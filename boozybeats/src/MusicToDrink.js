import React, {Component} from 'react';

// musicToDrink
class MusicToDrink extends Component {
  render() {
    return (
      <div className="musicToDrink">
        <p> Artist Name: {this.props.artistSearchTerm} </p>
      </div>
    )
  }
}

export default MusicToDrink