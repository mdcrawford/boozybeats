import React, { Component } from 'react';
import axios from 'axios';
import wineData from './JSON/wine.json';
import classTag from './JSON/classToTag.json';

var apikey="36e788d29c49043baee478357fc2620c";

class WineToMusic extends Component {

    constructor(props){
        super(props);
        this.state = {
            wineInfo: {
                name: "",
                description:""
                },
                tag:""
        }
    }

    _saveQuery=response =>{
        let wineInfo=response.data.Products.List[0];
        var wineClass=this.getWineClass(wineInfo);
        var tag=this.getTagOfClass(wineClass);
        this.setState({
            wineInfo: wineInfo,
            tag:tag
        })

        console.log(this.state.tag);
    }

    getTagOfClass(wineClass){
        switch (wineClass){
            case 2:
                return classTag.class2[0];
            case 3:
                return classTag.class3[0];
    }
    }

    getWineClass(wine){
        if(wine.PriceRetail<35){
            return 2;
        }
        return 3;
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