import * as React from "react";

import { HeaderPanel } from "./HeaderPanel";
import { Items } from "./Items";

import { IDataProvider }  from '../data/IDataProvider';

interface Props { DataProvider: any,Items: Array<any>};
interface State { };

export class List extends React.Component <Props,State> {
    private items:  Array<any> = [];

    constructor(state,props) {
        super(state,props);
        
    }

    render() {
        return (<div style= {{ borderColor: "orange", borderStyle: "solid" }} >

            <HeaderPanel />
            <Items {...this.props} Items={this.props.Items} />
         
          </div>);
    }
    
    // componentDidMount() {
    //     this.props.DataProvider.getListItems().then((data) => {
    //         console.log("Got it" + data);
    //         // debugger;
            
    //         this.setState({Items: data});
    //     })
    // }

}