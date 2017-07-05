import * as React from "react";

import { Item } from './Item';
import { IDataProvider } from "../data/IDataProvider";
import { IListItem } from "../data/IListItem";

interface Props { Items: Array<IListItem>, DataProvider:IDataProvider, deleteItemFromListHandler:Function, sorter:any  };
interface State { };

export class Items extends React.Component <Props,State> {
    render() {
        let sortedList = this.props.Items.sort(this.props.sorter);
        return (<div style= {{ borderColor: "cyan", borderStyle: "solid" }} >
        
                <ul> 
                    { sortedList.map((item, index) => { 
                                return (
                                        <li key={index /* item.Id */ } >
                                            <Item {...this.props} Item={item} />
                                        </li>
                                    )
                    })
                        
                         }
                </ul>
                    

        </div>);
    }
}