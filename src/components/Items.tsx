import * as React from "react";

import { Item } from './Item';

interface Props { Items: Array<any>  };
interface State { };

export class Items extends React.Component <Props,State> {
    render() {
        return (<div style= {{ borderColor: "cyan", borderStyle: "solid" }} >
        
                <ul> 
                    { this.props.Items.map((item, index) => { 
                                return (
                                        <li key={index /* item.Id */ } >
                                            <Item Item={item} />
                                        </li>
                                    )
                    })
                        
                         }
                </ul>
                    

        </div>);
    }
}