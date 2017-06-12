import * as React from "react";

interface Props { Title: String };
interface State {};

export class HeaderField extends React.Component <Props,State> {
    render() {
        return (<div style= {{ borderColor: "yellow", borderStyle: "solid" }} > { this.props.Title } </div>);
    }
}