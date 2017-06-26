import * as React from "react";

interface Props {  };
interface State { editMode: boolean };

import { EntryField } from "./EntryField";

export class EntryFieldPanel extends React.Component <Props,State> {

    fieldChangeHandler(e:Event):void {

    }
    render() {
        return (<div>
                    <EntryField changeHandler="{this.fieldChangeHandler}" FieldName="Title" PlaceHolder="Type title..." />
                </div>);
    }
}