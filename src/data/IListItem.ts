import PropTypes from 'prop-types';

export interface IListItem {
    Id: String;
    Title: PropTypes.String;
    ExtraField: String;
}

export class MockListItem implements IListItem {
    Id: String;
    Title: String;
    ExtraField: String;
    constructor(Id, Title, ExtraField?) {
        this.Id = Id;
        this.Title = Title;
        this.ExtraField = ExtraField
    }
}

export class SPListItem implements IListItem {
    Id: String;
    Title: String;
    ExtraField: String}