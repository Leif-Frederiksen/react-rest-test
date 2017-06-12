import * as React from "react";

import PropTypes from 'prop-types';


interface Props { FieldName: PropTypes.String.isRequired,  PlaceHolder?: PropTypes.String };
interface State {};

export class EntryField extends React.Component <Props,State> {

    render() {
        let ph = "Olebole"
        return (<div>
                    <input type="text" placeholder={this.props.PlaceHolder} / >
                    </div>
                    );
    }
}