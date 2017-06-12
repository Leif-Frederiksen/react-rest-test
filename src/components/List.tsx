import * as React from "react";

import { HeaderPanel } from "./HeaderPanel";
import { Items } from "./Items";

import { getListItems }  from '../data/DataProvider';

interface Props { };
interface State {Items: Array<any> };

export class List extends React.Component <Props,State> {
    private items:  Array<any> = [];

    constructor(state,props) {
        super(state,props);
        this.state =  {Items: this.items};
    }

    render() {
        return (<div style= {{ borderColor: "orange", borderStyle: "solid" }} >

            <HeaderPanel />
            <Items Items={this.state.Items} />
         
          </div>);
    }

    componentDidMount() {
        getListItems().then((data) => {
            console.log("Got it" + data);
            
            this.setState({Items: data});
        })
    }

}