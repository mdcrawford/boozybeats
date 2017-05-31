import React, { Component } from 'react';

class WineToMusic extends Component {
    render() {
        return (
            <div>
                <p> The Wine Page!! </p>
                <p> {this.props.wineSearchTerm} </p>
            </div>
        )
    }
}

export default WineToMusic;