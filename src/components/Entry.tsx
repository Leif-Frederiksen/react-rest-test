import * as React from "react";

import { Item } from './Item';

import { createItem, IListItem }  from '../data/DataProvider';

import { EntryFieldPanel } from "./EntryFieldPanel";
import { EntryButtonPanel } from "./EntryButtonPanel";

interface Props {};
interface State { editMode: boolean};

export class Entry extends React.Component <Props,State> {
    constructor(props) {
        super(props);
    }

    onSubmit(e:Event) {
        alert ("onSubmit in parent");
        e.preventDefault();

        let item:IListItem = { Title:"something new", Id:null};
        createItem("RESTlist",item).then(object => {
            console.log("New object: " + object);
            
            let newItem: IListItem = { Id : object.Id, Title: object.Title};

            
        });
    }

    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > 
                    <EntryFieldPanel />
                    <EntryButtonPanel clickHandler={this.onSubmit} />
        
        </div>);
    }
}