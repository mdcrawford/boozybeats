import React, { Component } from 'react';
import logo2 from './images/beerbeats.png';

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
  }

  handleSubmit(field, event) {
    switch(field) {
      case "beer":
        this.props.onBeerClick(this.state.beerName);
        break;
      case "wine":
        this.props.onWineClick(this.state.wineName);
        break;
      case "artist":
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

        <h1 className="homeTitle"> Home Page </h1>

        <form className="Home-Beer-Search" onSubmit={(e) => this.handleSubmit("beer", e)}>
          <h5> Search what you're drinking to find some appropriate music... </h5>
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
          <h5> ...or search who you're listening to and find an appropriate drink! </h5>
          <label>
            Artist:
            <input type="text" onChange={ (event) => this.onInputChange("artistName", event)}/>
          </label>
          <input type="submit" value="Search Artist" />
        </form>
        <hr className="horizontalline" />
        <img className="LogoHome" src={logo2} />
      </div>
    )
  }
}

export default Home;