import * as React from "react";

import PropTypes from 'prop-types';


interface Props { FieldName: PropTypes.String.isRequired, changeHandler:any, PlaceHolder?: PropTypes.String, enabled:boolean };
interface State {  };

export class EntryField extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        // this.state = {
        //     FieldValue: ''
        // };
    }

    render() {
        let ph = "Olebole"
        return (<div>
            <input type="text"  disabled={!this.props.enabled} placeholder={this.props.PlaceHolder} onChange={evt => this.updateInputValue(evt)}/>
        </div>
        );
    }

    updateInputValue(evt) {
        // this.setState({
        //     FieldValue: evt.target.value
        // });

        // console.log("State of field: " + this.state["FieldValue"]);
        this.props.changeHandler(this.props.FieldName, evt.target.value);
    }
}