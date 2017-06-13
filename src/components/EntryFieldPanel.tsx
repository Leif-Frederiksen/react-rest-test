import * as React from "react";

interface Props {  };
interface State { editMode: boolean };

import { EntryField } from "./EntryField";

export class EntryFieldPanel extends React.Component <Props,State> {
    render() {
        return (<div>
                    <EntryField FieldName="Name" PlaceHolder="Type name..." />
                    <EntryField FieldName="Date" />
                </div>
                    
                    );
    }
}