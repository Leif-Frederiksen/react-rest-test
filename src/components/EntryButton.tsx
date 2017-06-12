import * as React from "react";

interface Props { Title: String, clickHandler:any };
interface State {};

export class EntryButton extends React.Component <Props,State> {
    render() {
        return (<button onClick={this.props.clickHandler} > { this.props.Title } </button>);
    }

}

