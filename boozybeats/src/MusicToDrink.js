import React, {Component} from 'react';
import axios from 'axios';

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