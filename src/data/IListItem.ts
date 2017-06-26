export interface IListItem {
    Id: String;
    Title: String;
}

export class MockListItem implements IListItem {
    Id: String;
    Title: String;
    constructor(Id, Title) {
        this.Id = Id;
        this.Title = Title;
    }
}

export class SPListItem implements IListItem {
    Id: String;
    Title: String;
}