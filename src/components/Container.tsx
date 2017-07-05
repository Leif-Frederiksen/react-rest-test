import * as React from "react";

import { Entry } from "./Entry";
import { List } from "./List";

interface Props { DataProvider:any, entryFields:Array<any> };
interface State { Items:Array<any> };

export class Container extends React.Component<Props,State> {
    render() {
            return (<div style= {{ borderColor: "green", borderStyle: "solid" }} > 
                    Container v2.0
                    
                        <Entry {...this.props} addItemToListHandler={this.addItemToList.bind(this)}/>
                        <List  {...this.props} deleteItemFromListHandler={this.deleteItemFromList.bind(this)} Items={this.state.Items} />
                    </div>);
    }

    componentWillMount() {
        this.setState( {Items: new Array<any>() });
        this.props.DataProvider.getListItems().then((data) => {
            this.setState({Items: data});
        })
    }

    addItemToList(item:any) {
        this.state.Items.push(item);
        this.setState({Items: this.state.Items })
    }
    
    deleteItemFromList(item:any) {
        this.setState({Items: this.state.Items.filter(obj => obj !== item) })
        console.log("Deleted in container... " + item.Id)
    }
}