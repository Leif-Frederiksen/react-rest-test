
import "isomorphic-fetch";

// import { SPHttpClient, SPHttpClientResponse,  } from 'sp-http';

import "babel-polyfill"; // To make "promise" available on IE

interface IListItem {
    Id: String;
    Title: String;
}

export function

    getListItems() {
        let url = "https://metroselskabetis.sharepoint.com/sites/leftest/_api/web/lists/GetByTitle('RESTlist')/items";
        // let url = "https://devportal.metroselskabet.dk/LEF/_api/web/lists/GetByTitle('importedSR')/items";

        console.log("URL: " + url);

        let header = new Headers();
        header.append ("accept","application/json;odata=verbose");
        return fetch(url, {
                    credentials: 'include'  ,
                    headers: header
                    })
                        .then((response) => { return response.json() } )
                        .then((responseJson) => {

                            console.log("Result: " + responseJson.d.results);
                
                            
                            return responseJson.d.results;
                        })
                        .catch((error) => {
                            console.error(error);
                        });
    }
