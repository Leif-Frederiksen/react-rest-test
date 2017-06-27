
import "isomorphic-fetch";
import "babel-polyfill"; // To make "promise" available on IE

import { IListItem } from "./IListItem";
import { IDataProvider } from "./IDataProvider";


export class SPListDataProvider implements IDataProvider {

    listName:string;

    constructor(listName) {
        this.listName = listName;
    }
    itemList:Array<IListItem>;

    getListItems() {
        let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('" + this.listName + "')/items";

        console.log("URL: " + url);

        let header = new Headers();
        header.append("accept", "application/json;odata=verbose");
        return fetch(url, {
            credentials: 'include',
            headers: header
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return responseJson.d.results;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    createItem(listName: string, item: IListItem) {
        let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('" + this.listName + "')/items";

        console.log("URL: " + url);
        let header = new Headers();
        header.append("ACCEPT", "application/json;odata=verbose");
        header.append("X-RequestDigest", this.getRequestDigest());
        header.append("X-HTTP-Method", "POST");
        header.append("If-Match", "*");
        header.append("content-type", "application/json;odata=verbose");

        let updateItem = {
            "__metadata": { "type": this.getListItemType(listName) },
            "Title": item.Title
        };

        return fetch(url, {
            credentials: 'include',
            method: "POST",
            headers: header,
            body: JSON.stringify(updateItem)
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return responseJson.d;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    saveItem(listName: string, item: IListItem) {
        let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('" + this.listName + "')/items(" + item.Id + ")";

        console.log("URL: " + url);
        let header = new Headers();
        header.append("ACCEPT", "application/json;odata=verbose");
        header.append("X-RequestDigest", this.getRequestDigest());
        header.append("X-HTTP-Method", "Merge");
        header.append("If-Match", "*");
        header.append("content-type", "application/json;odata=verbose");

        console.log("RD:" + this.getRequestDigest());

        item.Title += "X";

        let updateItem = {
            "__metadata": { "type": this.getListItemType(listName) },
            "Title": item.Title += "-X" //updated title" //change as necessary, just for test purposes
        };

        return fetch(url, {
            credentials: 'include',
            method: "MERGE",
            headers: header,
            body: JSON.stringify(updateItem)
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return responseJson.d;
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