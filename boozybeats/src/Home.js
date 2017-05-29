import React, { Component } from 'react';

// Home
class Home extends Component {
  render() {
    if (this.props.display === false) {
      return (
        <div />
      );
    }
    return (
      <div className="Home">

        <h1> Home Page </h1>

        <form className="Home-Beer-Search">
          <label>
            Beer:
            <input type="text" />
          </label>
          <input type="submit" value="Search Beer" />
        </form>

        <form className="Home-Wine-Search">
          <label>
            Wine:
            <input type="text" />
          </label>
          <input type="submit" value="Search Wine" />
        </form>

        <form className="Home-Artist-Search">
          <label>
            Artist:
            <input type="text" />
          </label>
          <input type="submit" value="Search Artist" />
        </form>

      </div>
    )
  }
}

export default Home;