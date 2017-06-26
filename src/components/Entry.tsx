import * as React from "react";

import PropTypes from 'prop-types';

import { Item } from './Item';

import { IDataProvider }  from '../data/IDataProvider';
import { IListItem }  from '../data/IListItem';

import { EntryFieldPanel } from "./EntryFieldPanel";
import { EntryButtonPanel } from "./EntryButtonPanel";

interface Props { DataProvider: any};
interface State { editMode: boolean, titleFieldValue: PropTypes.String};

export class Entry extends React.Component <Props,State> {
    constructor(props) {
        super(props);
    }

    onSubmit(e:Event) {
        alert ("onSubmit in parent");
        e.preventDefault();

        let item:IListItem = { Title:"something new", Id:null};
        this.props.DataProvider.createItem("RESTlist",item).then(object => {
            console.log("New object: " + object);
        });
    }

    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > 
                    <EntryFieldPanel />
                    <EntryButtonPanel clickHandler={this.onSubmit.bind(this)} />
        
        </div>);
    }
}