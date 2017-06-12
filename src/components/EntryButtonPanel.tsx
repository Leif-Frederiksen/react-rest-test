import * as React from "react";

import { EntryButton } from "./EntryButton";

interface Props { clickHandler: any };
interface State {};

export class EntryButtonPanel extends React.Component <Props,State> {
    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > 
                    <EntryButton  {...this.props} Title="OK" />
                </div>);
    }

}