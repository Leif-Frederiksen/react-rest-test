import * as React from "react";

import { HeaderPanel } from "./HeaderPanel";
import { Items } from "./Items";

import { IDataProvider }  from '../data/IDataProvider';
import { IListItem } from "../data/IListItem";

interface Props { DataProvider: any,Items: Array<any>, deleteItemFromListHandler: any};
interface State { };

export class List extends React.Component <Props,State> {
    private items:  Array<any> = [];

    constructor(state,props) {
        super(state,props);
    }

    render() {
        return (<div style= {{ borderColor: "orange", borderStyle: "solid" }} >

            <HeaderPanel />
            <Items {...this.props} Items={this.props.Items} sorter={this.sortByTitleDanish} />
         
          </div>);
    }

    sortByTitle(a:IListItem,b:IListItem):number {
        console.log("a: " + a.Title + " b: " + b.Title);
        if (a.Title > b.Title) return 1;
        if (a.Title < b.Title) return -1;
        return 0;
    }
    
    sortByTitleDanish(a:IListItem,b:IListItem):number {
        console.log("a: " + a.Title + " b: " + b.Title);
        return a.Title.localeCompare(b.Title, "da-DK");
    }
}