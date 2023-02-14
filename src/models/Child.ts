import User from "./User";

export default class Child {
    constructor(public Name: string,
        public BirthDate: Date, public ParentId: number, public ChildTz: string) { }
}


