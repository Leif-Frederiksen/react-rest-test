import * as React from "react";

import { Entry } from "./Entry";
import { List } from "./List";

interface Props { DataProvider:any, entryFields:Array<any> };
interface State { Items:Array<any> };

export class Container extends React.Component<Props,State> {
    render() {
            return (<div style= {{ borderColor: "green", borderStyle: "solid" }} > 
                    Container v2.0
                    
                        <Entry {...this.props} />
                        <List  {...this.props} Items={this.state.Items} />
                    </div>);
    }

    componentWillMount() {
        this.setState( {Items: new Array<any>() });
        this.props.DataProvider.getListItems().then((data) => {
            this.setState({Items: data});
        })
    }
}