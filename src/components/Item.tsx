import * as React from "react";

import { ItemButtonPanel } from './ItemButtonPanel';

interface Props { Item: any, DataProvider:any };
interface State { EditMode: boolean};

export class Item extends React.Component <Props,State> {
    constructor(props) {
        super(props);
        this.state = { EditMode: false};
    }

    render() {
        return (<div style= {{ borderColor: "orange", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                    <div style= {{ borderColor: "purple", borderStyle: this.state.EditMode ? "dashed" : "solid"  }} >
                            { this.props.Item.Title } ( {this.props.Item.Id} ) 
                    </div>

                    <ItemButtonPanel {...this.props} editStateHandler={this.setEditState.bind(this)} EditMode={this.state.EditMode} />
                </div>
                
                );
    }

    setEditState(editState:boolean) {
        this.setState({EditMode: editState});
    }
}