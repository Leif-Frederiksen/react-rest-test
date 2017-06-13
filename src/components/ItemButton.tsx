import * as React from "react";

interface Props { Title: String, Item:any, clickHandler };
interface State {};

export class ItemButton extends React.Component <Props,State> {
    render() {
        return (<button title={this.props.Item.Title} onClick={this.props.clickHandler}> { this.props.Title } </button>);
    }
}