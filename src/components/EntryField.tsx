import * as React from "react";

import PropTypes from 'prop-types';


interface Props { FieldName: PropTypes.String.isRequired, PlaceHolder?: PropTypes.String, changeHandler:any };
interface State {  };

export class EntryField extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            FieldValue: ''
        };
    }

    render() {
        let ph = "Olebole"
        return (<div>
            <input type="text" placeholder={this.props.PlaceHolder} onChange={evt => this.updateInputValue(evt)}/>
        </div>
        );
    }

    updateInputValue(evt) {
        this.setState({
            FieldValue: evt.target.value
        });

        console.log("State of field: " + this.state["FieldValue"]);

    }
}