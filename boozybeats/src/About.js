import React, { Component } from 'react';
import mike from './images/michael.PNG';

// About Page.  If the display prop is true, this will display
class About extends Component {
  render() {
    return (
      <div>
        <h1> About Us </h1>
        <h3 className="About" >
          Boozy Beats is a web application designed to pair your superior music taste with your refined penchant for all things alcohol. 
          By simply entering your prefered artist for the night, Boozy Beats will automatically supply a list of recommended beverages to
          complement your sophisticated ears.  Already know what you’re drinking, but don’t like what you’re hearing?  Boozy Beats can also 
          take the name of your drink and pair it with a selective playlist curated from YouTube and Last.fm!
        </h3>

        <div>
          <h2 className="contact">
          Contributors:
          </h2>
          <div className="personProfile">
            <h3>
              <a href="https://github.com/mdcrawford">Michael Crawford </a>
            </h3>
            <h3>
              mdc8wa@virginia.edu
            </h3>
            <img className="Profilepic" src={mike} />
          </div>     
          <div className="personProfile">
            <h3>
              <a href="https://github.com/Starpit390">Arpit Rupakhetee </a>
            </h3>
            <h3>
              ar9cd@virginia.edu
            </h3>
            <img className="Profilepic" src={mike} alt="Michael Crawford" />
          </div>          
        </div>
      </div>
    )
  }
}

export default About;