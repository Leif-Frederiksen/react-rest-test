import * as React from "react";

interface Props { Title: String, clickHandler:any, enabled:boolean };
interface State {};

export class EntryButton extends React.Component <Props,State> {
    render() {
        return (<button onClick={this.props.clickHandler} disabled={!this.props.enabled} >  { this.props.Title } </button>);
    }
}