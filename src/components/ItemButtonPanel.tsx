import * as React from "react";

import { saveItem }  from '../data/DataProvider';

import { ItemButton } from './ItemButton';

interface Props { Item: any, EditMode: boolean, editStateHandler: any };
interface State { /* EditModeState: boolean */ };

export class ItemButtonPanel extends React.Component<Props, State> {
    onDelete(e: any) {
        console.log("onDelete in ItemButtonPanel: " + this.props.Item.Title);
        e.preventDefault();
    }
    onEdit(e: any) {
        this.props.editStateHandler(true);
        console.log("onEdit in ItemButtonPanel: " + this.props.Item.Title);
        e.preventDefault();
    }
    onEditOk(e: any) {
        this.props.editStateHandler(false);
        console.log("onEditOk in ItemButtonPanel: " + this.props.Item.Title);
        saveItem("RESTlist",this.props.Item);
        e.preventDefault();
    }
    onEditCancel(e: any) {
        this.props.editStateHandler(false);
        console.log("onEditCancel in ItemButtonPanel: " + this.props.Item.Title);
        e.preventDefault();
    }

    render() {
        if (this.props.EditMode) {
            return (<div style={{ borderColor: "red", borderStyle: this.props.EditMode ? "dashed" : "solid" }} >
                        <ItemButton  {...this.props} Title="Ok" clickHandler={this.onEditOk.bind(this)} />
                        <ItemButton  {...this.props} Title="Cancel" clickHandler={this.onEditCancel.bind(this)} />
                    </div>);
        } else {
            return (<div style={{ borderColor: "red", borderStyle: this.props.EditMode ? "dashed" : "solid" }} >
                        <ItemButton  {...this.props} Title="Edit" clickHandler={this.onEdit.bind(this)} />
                        <ItemButton  {...this.props} Title="Delete" clickHandler={this.onDelete.bind(this)} />
                    </div>);
        }
    }
}