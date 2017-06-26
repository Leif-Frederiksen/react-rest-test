import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Container } from "./components/Container";
import { Entry } from "./components/Entry";

import { SPListDataProvider }  from './data/SPListDataProvider';
import { MockListDataProvider }  from './data/MockListDataProvider';
import { IListItem }  from './data/IListItem';
import { IDataProvider }  from './data/IDataProvider';

// let dataProvider:IDataProvider = new SPListDataProvider('RESTlist');
let dataProvider:IDataProvider = new MockListDataProvider('RESTlist');

ReactDOM.render(
    <Container DataProvider={dataProvider}/>,
    document.getElementById("example")
);

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );

