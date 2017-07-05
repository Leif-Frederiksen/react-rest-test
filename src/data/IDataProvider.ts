import { IListItem }  from './IListItem';
import "babel-polyfill"; // To make "promise" available on IE

export interface IDataProvider {
    getListItems(): Promise<Array<IListItem>>;
    createItem(item: IListItem);
    deleteItem(item: IListItem);
}