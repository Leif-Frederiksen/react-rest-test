import * as React from "react";

import { ItemButton } from './ItemButton';

interface Props { Item:any };
interface State {};

export class ItemButtonPanel extends React.Component <Props,State> {
    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > { 
            <ItemButton Title="Delete" Item={this.props.Item} />
        } </div>);
    }
}