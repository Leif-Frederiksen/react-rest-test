import * as React from "react";

import { ItemButtonPanel } from './ItemButtonPanel';

interface Props { Item: any };
interface State {};

export class Item extends React.Component <Props,State> {
    render() {
        return (<div>
                    <div style= {{ borderColor: "purple", borderStyle: "solid" }} >
                            { this.props.Item.Title } ( {this.props.Item.Id} ) }
                    </div>

                    <ItemButtonPanel Item={this.props.Item} />
                </div>
                
                );
    }
}