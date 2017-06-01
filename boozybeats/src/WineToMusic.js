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
        let wineName=wineInfo.Name;
        var tag=this.getTagOfClass(wineClass, wineName);
        console.log(tag);
        this.setState({
            wineInfo: wineInfo,
            tag:tag
        })
    }

    getClassSize(size){
        switch(size){
            case 2:
                //console.log(classTag.class2.length);
                return classTag.class2.length;
            case 3:
                //console.log(classTag.class3.length);
                return classTag.class3.length;
        }
    }

    getTagOfClass(wineClass, wineName){
        switch (wineClass){
            case 2:
                return classTag.class2[this.hashFunction(wineName, this.getClassSize(wineClass))];
            case 3:
                return classTag.class3[this.hashFunction(wineName, this.getClassSize(wineClass))];
    }
    }

    hashFunction(wineName, classSize) {
        var total=0;
        for (let i=0; i<wineName.length; i++){
            total+=wineName.charCodeAt(i)*i;
        }
        return total%classSize;
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
                <p> Wine name: {this.state.wineInfo.Name} </p>
                <p> Wine name: {this.state.wineInfo.Description} </p>
                <iframe className="ytplayer" type="text/html" width="640" height="360"
                src={"https://www.youtube.com/embed?listType=search&list=" + this.state.tag + "+music"}>
                </iframe>
            </div>
        )
    }
}

export default WineToMusic;