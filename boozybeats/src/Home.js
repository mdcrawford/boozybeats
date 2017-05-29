import React, { Component } from 'react';

// Home
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beerName: "",
      wineName: "",
      artistName: "",
    }
  }

  onInputChange(field, event) {
    this.setState({
      ...this.state,
      [field]: event.target.value,
    })
    console.log(this.state);
  }

  handleSubmit(field, event) {
    switch(field) {
      case "beer":
        console.log("Beer method");
        this.props.onBeerClick(this.state.beerName);
        break;
      case "wine":
        console.log("Wine method");
        this.props.onWineClick(this.state.wineName);
        break;
      case "artist":
        console.log("Artist method");
        this.props.onArtistClick(this.state.artistName);
        break;
      default:
        console.log("Error: incorrect field");
        break;
    }
    event.preventDefault();
  }

  render() {

    return (
      <div className="Home">

        <h1> Home Page </h1>

        <form className="Home-Beer-Search" onSubmit={(e) => this.handleSubmit("beer", e)}>
          <label>
            Beer:
            <input type="text" onChange={ (event) => this.onInputChange("beerName", event)}/>
          </label>
          <input type="submit" value="Search Beer" />
        </form>

        <form className="Home-Wine-Search" onSubmit={(e) => this.handleSubmit("wine", e)}>
          <label>
            Wine:
            <input type="text" onChange={ (event) => this.onInputChange("wineName", event)}/>
          </label>
          <input type="submit" value="Search Wine" />
        </form>

        <form className="Home-Artist-Search" onSubmit={(e) => this.handleSubmit("artist", e)}>
          <label>
            Artist:
            <input type="text" onChange={ (event) => this.onInputChange("artistName", event)}/>
          </label>
          <input type="submit" value="Search Artist" />
        </form>

      </div>
    )
  }
}

export default Home;