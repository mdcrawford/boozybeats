import React, { Component } from 'react';
import axios from 'axios';
import classTag from './JSON/classToTagArray.json';


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

    // upon mounting, make the axios request on the wine search term
    componentWillMount(){
        let url="http://services.wine.com/api/beta2/service.svc/json/catalog?apikey="+apikey+"&search="+this.props.wineSearchTerm;
        axios.get(url)
            .then(this._saveQuery)
    }

    // using the axios response, sets the wine's info and the tag
    _saveQuery=response =>{
        let wineInfo = response.data.Products.List[0];
        let wineClass = this.getWineClass(wineInfo);
        let wineName = wineInfo.Name;
        let tag = this.getTagOfClass(wineClass, wineName);
        
        this.setState({
            wineInfo: wineInfo,
            tag: tag
        })
    }

    // takes in a wine and determines its class
    getWineClass(wine){
        if(wine.PriceRetail<35){
            return 2;
        }
        return 3;
    }

    // uses the determined class (2 or 3) and the wineName (string) to determine the tag from that class
    getTagOfClass(wineClass, wineName) {
        let classSize = 0;
        switch (wineClass) {
            case 2:
                classSize = this.getClassSize(wineClass);
                return classTag.class2[this.getIndexOfClass(wineName, classSize)];
            case 3:
                classSize = this.getClassSize(wineClass);
                return classTag.class3[this.getIndexOfClass(wineName, classSize)];
        }
    }

    // takes in the className (2 or 3) and returns the length of that class's array
    getClassSize(className){
        switch(className){
            case 2:
                return classTag.class2.length;
            case 3:
                return classTag.class3.length;
        }
    }

    // effectively a hash function to determine the index of the tag
    getIndexOfClass(wineName, classSize) {
        var total=0;
        for (let i=0; i<wineName.length; i++){
            total+=wineName.charCodeAt(i)*i;
        }
        return total%classSize;
    }
   
    // render that bad boy
    render() {
        let description = <div />;
        
        if (this.state.wineInfo.description != "") {
            description = <h5> Wine Description: {this.state.wineInfo.Description} </h5>
        }

        return (
            <div>
                <h4 className="searchText"> Paired your {this.state.wineInfo.Name}</h4>
                <h4 className="searchText">With</h4>
                <h1 className="searchText">{this.state.tag.toUpperCase()}</h1>
                <iframe className="ytplayer" type="text/html" width="640" height="360"
                src={"https://www.youtube.com/embed?listType=search&list=" + this.state.tag + "+music"}>
                </iframe>
            </div>
        )
    }
}

export default WineToMusic;