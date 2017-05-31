import React, { Component } from 'react';
import axios from 'axios';

var apikey="36e788d29c49043baee478357fc2620c";

class WineToMusic extends Component {

    constructor(props){
        super(props);
        this.state={
            wineName:"",
            wineDescription:"",
            winePrice:""
        }
    }

    _saveQuery=response =>{
        let wineInfo=response.data.Products.List[0];
        this.setState({
            wineName:wineInfo.Name,
            wineDescription: wineInfo.wineDescription,
            winePrice: wineInfo.PriceRetail
        })
        console.log(wineInfo);
    }

    componentWillMount(){
         let url="http://services.wine.com/api/beta2/service.svc/json/catalog?apikey="+apikey+"&search="+this.props.wineSearchTerm;

         axios.get(url)
            .then(this._saveQuery)
    }
   
    render() {
        return (
            <div>
                <p> Wine name: {this.props.wineSearchTerm} </p>
            </div>
        )
    }
}

export default WineToMusic;