import * as React from "react";

import { Entry } from "./Entry";
import { List } from "./List";

interface Props { DataProvider:any };
interface State {};

export class Container extends React.Component<Props,State> {
    render() {
            return (<div style= {{ borderColor: "green", borderStyle: "solid" }} > 
                    Container v1.3
                    
                        <Entry {...this.props} />
                        <List  {...this.props} />
                    </div>);
    }

}
