import * as React from "react";

interface Props { Title: String, Item:any };
interface State {};

export class ItemButton extends React.Component <Props,State> {
    render() {
        return (<button title={this.props.Item.Title}> { this.props.Title } </button>);
    }
}