import * as React from "react";
import { EntryFieldType } from "./EntryFieldType";

interface Props { changeHandler: any, entryFields:Array<EntryFieldType> };
interface State { editMode: boolean };

import { EntryField } from "./EntryField";

export class EntryFieldPanel extends React.Component <Props,State> {
    render() {
        let fields = 
            this.props.entryFields.map(function (entryField,index) {
                        return <EntryField key={index} changeHandler={this.props.changeHandler} FieldName={entryField.name} PlaceHolder={entryField.placeHolderText} />
                    },this)

        return (<div>
                   {fields} 
                </div>);
    }
}