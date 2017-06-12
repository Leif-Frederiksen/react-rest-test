import * as React from "react";

import { EntryFieldPanel } from "./EntryFieldPanel";
import { EntryButtonPanel } from "./EntryButtonPanel";

interface Props {};
interface State { NameState: '', DateState: ''};

export class Entry extends React.Component <Props,State> {
    constructor(props) {
        super(props);
    }

    onSubmit() {
        alert ("onSubmit in parent");
    }

    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > 
                    <EntryFieldPanel />
                    <EntryButtonPanel clickHandler={this.onSubmit} />
        
        </div>);
    }
}