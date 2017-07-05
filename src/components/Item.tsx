import * as React from "react";
import PropTypes from 'prop-types';

import { ItemButtonPanel } from './ItemButtonPanel';
import { IListItem } from "../data/IListItem";

interface Props { Item: IListItem, DataProvider:any, deleteItemFromListHandler:any };
interface State { EditMode: boolean, Title: PropTypes.String, ExtraField: PropTypes.String};

export class Item extends React.Component <Props,State> {
    constructor(props) {
        super(props);
        this.state = { EditMode: false, Title: this.props.Item.Title, ExtraField: this.props.Item.ExtraField};
    }

    handleChange(e:any) {
console.log("change...");
console.log()
    }

    render() {
        var html;

        if (this.state.EditMode) {
            html = (<div style= {{ borderColor: "orange", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                    <div style= {{ borderColor: "purple", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                            <input type="text" value={this.props.Item.Title} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div style= {{ borderColor: "purple", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                            { this.props.Item.ExtraField }
                    </div>

                    <ItemButtonPanel {...this.props} editStateHandler={this.setEditState.bind(this)} EditMode={this.state.EditMode} />
                </div>
                
                );
        } else {
            html = (<div style= {{ borderColor: "orange", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                    <div style= {{ borderColor: "purple", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                            { this.props.Item.Title } ( {this.props.Item.Id} ) 
                    </div>
                    <div style= {{ borderColor: "purple", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                            { this.props.Item.ExtraField }
                    </div>

                    <ItemButtonPanel {...this.props} editStateHandler={this.setEditState.bind(this)} EditMode={this.state.EditMode} />
                </div>
                
                );

        }

        return html;
    }

    setEditState(editState:boolean) {
        this.setState({EditMode: editState});
    }
}