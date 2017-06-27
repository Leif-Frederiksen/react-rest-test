import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Container } from "./components/Container";
import { Entry } from "./components/Entry";
import { EntryFieldType } from "./components/EntryFieldType";

import { SPListDataProvider }  from './data/SPListDataProvider';
import { MockListDataProvider }  from './data/MockListDataProvider';
import { IListItem }  from './data/IListItem';
import { IDataProvider }  from './data/IDataProvider';

// let dataProvider:IDataProvider = new SPListDataProvider('RESTlist');
let dataProvider:IDataProvider = new MockListDataProvider('RESTlist');

let entryFields = new Array<EntryFieldType>();

entryFields.push(new EntryFieldType("Title","Enter title..."));
// entryFields.push(new EntryFieldType("Date","Enter date..."));

ReactDOM.render(
    <Container DataProvider={dataProvider} entryFields={entryFields} />,
    document.getElementById("Container")
);