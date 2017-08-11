
import "isomorphic-fetch";
import "babel-polyfill"; // To make "promise" available on IE

import { IListItem, MockListItem } from "./IListItem";
import { IDataProvider } from "./IDataProvider";


export class MockListDataProvider implements IDataProvider {

    listName:string;

    items: Array<IListItem>;

    constructor(listName) {
        this.listName = listName;

        this.items = new Array<IListItem>();
        this.items.push(new MockListItem("1","Ole","OleExtra"));
        this.items.push(new MockListItem("2","Bent"));
        this.items.push(new MockListItem("3","Kirsten"));
    }

    getListItems() {
        return fetch("src/data/MockListData.json")
            .then((response) => { 

                return this.items;
            });
    }

    deleteItem(item: IListItem) {
        return fetch("src/data/MockListData.json")
            .then((response) => { 
                console.log("Delete from server: " + item.Id);
                return item;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    createItem(item: IListItem) {
        return fetch("src/data/MockListData.json")
            .then((response) => { 
                item["Id"] = new Date().getTime().toString();
                return item;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    saveItem(item: IListItem) {
        return fetch("src/data/MockListData.json")
            .then((response) => { 
                return item;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getListItemType(name) {
        return "SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
    }

    getRequestDigest(): string {
        let element: any = document.getElementById("__REQUESTDIGEST");
        return element ? element.value : "fake-digest";
    }
}