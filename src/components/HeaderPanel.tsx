import * as React from "react";

import { HeaderField } from './HeaderField';

interface Props {};
interface State {};

export class HeaderPanel extends React.Component <Props,State> {
    render() {
        return (<div style= {{ borderColor: "blue", borderStyle: "solid" }} >
            <HeaderField Title="Name" />
            <HeaderField Title="Date" />
        </div>);
    }
}