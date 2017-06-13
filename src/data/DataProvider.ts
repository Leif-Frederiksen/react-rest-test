
import "isomorphic-fetch";
import "babel-polyfill"; // To make "promise" available on IE

export var itemList:Array<IListItem>;

export interface IListItem {
    Id: String;
    Title: String;
}

export function getListItems() {
    let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('RESTlist')/items";

    console.log("URL: " + url);

    let header = new Headers();
    header.append("accept", "application/json;odata=verbose");
    return fetch(url, {
        credentials: 'include',
        headers: header
    })
        .then((response) => { return response.json() })
        .then((responseJson) => {

            console.log("Result: " + responseJson.d.results);


            return responseJson.d.results;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function createItem(listName: string, item: IListItem) {
    let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('RESTlist')/items";

    console.log("URL: " + url);
    let header = new Headers();
    header.append("ACCEPT", "application/json;odata=verbose");
    header.append("X-RequestDigest", getRequestDigest());
    header.append("X-HTTP-Method", "POST");
    header.append("If-Match", "*");
    header.append("content-type", "application/json;odata=verbose");

    console.log("RD:" + getRequestDigest());

    item.Title += "X";

    let updateItem = {
        "__metadata": { "type": /* "SP.Data.RESTlistListItem" */ getListItemType(listName) },
        "Title": item.Title += "-X" //updated title" //change as necessary, just for test purposes
    };

    return fetch(url, {
        credentials: 'include',
        method: "POST",
        headers: header,
        // body: metadata,
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

export function saveItem(listName: string, item: IListItem) {
    let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('RESTlist')/items(" + item.Id + ")";

    console.log("URL: " + url);
    let header = new Headers();
    header.append("ACCEPT", "application/json;odata=verbose");
    header.append("X-RequestDigest", getRequestDigest());
    header.append("X-HTTP-Method", "Merge");
    header.append("If-Match", "*");
    header.append("content-type", "application/json;odata=verbose");

    console.log("RD:" + getRequestDigest());

    item.Title += "X";

    let updateItem = {
        "__metadata": { "type": /* "SP.Data.RESTlistListItem" */ getListItemType(listName) },
        "Title": item.Title += "-X" //updated title" //change as necessary, just for test purposes
    };

    return fetch(url, {
        credentials: 'include',
        method: "MERGE",
        headers: header,
        // body: metadata,
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

function getListItemType(name) {
    return "SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
}

function getRequestDigest(): string {
    let element: any = document.getElementById("__REQUESTDIGEST");
    return element ? element.value : "fake-digest";
}
