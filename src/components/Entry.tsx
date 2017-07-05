import * as React from "react";

import PropTypes from 'prop-types';

import { Item } from './Item';

import { IDataProvider }  from '../data/IDataProvider';
import { IListItem }  from '../data/IListItem';

import { EntryFieldPanel } from "./EntryFieldPanel";
import { EntryButtonPanel } from "./EntryButtonPanel";
import { EntryFieldType } from "./EntryFieldType";

interface Props { DataProvider: any, entryFields: Array<any>, addItemToListHandler:any};
interface State { enabled: boolean, fieldValues: FieldValues};

export class FieldValue {
    fieldName: String;
    fieldValue: any;

    constructor(fieldName:String, FieldValue:String) {
        this.fieldName = fieldName;
        this.fieldValue = FieldValue;
    }
}

export class FieldValues {
    fieldValues: Array<FieldValue>;

    constructor(entryFields:Array<EntryFieldType>) {

        this.fieldValues= new Array<FieldValue>();

        for (let entryField of entryFields) {
            this.fieldValues.push(new FieldValue(entryField.name,""));
        }
    }

    setFieldValue(fieldName:String, fieldValue: any):void {
        console.log("In setFieldValue. Put " + fieldValue + " into " + fieldName);
        for (let field of this.fieldValues) {
            if (field.fieldName == fieldName) {
                field.fieldValue = fieldValue;
            }
        }
    }

    getFieldValue(fieldName:String):any {
        for (let fieldValue of this.fieldValues) {
            if (fieldValue.fieldName == fieldName) {
                return fieldValue.fieldValue;
            }
        }
    }
}

export class Entry extends React.Component <Props,State> {
    fieldValues:FieldValues;

    constructor(props) {
        super(props);
        this.fieldValues = new FieldValues(this.props.entryFields);
    }

    onSubmit(e:Event) {
        e.preventDefault();

        let item = {};
        for (let field of this.props.entryFields) {
            item[field.name] = this.fieldValues.getFieldValue(field.name);
        }

        this.setState({"enabled":false});
        this.props.DataProvider.createItem(item).then(object => {
            item["Id"] = object.Id;
            this.props.addItemToListHandler(item);
            this.setState({"enabled":true});
        });
    }

    handleFieldChange(fieldName:String, value:any) {
        this.fieldValues.setFieldValue(fieldName,value);
    }
    
    render() {
        return (<div style= {{ borderColor: "red", borderStyle: "solid" }} > 
                    <EntryFieldPanel enabled={this.state.enabled} changeHandler={this.handleFieldChange.bind(this)} entryFields={this.props.entryFields}/>
                    <EntryButtonPanel enabled={this.state.enabled} clickHandler={this.onSubmit.bind(this)} />
        
        </div>);
    }

    componentWillMount() {
        this.setState({ "enabled" : true });
    }
}