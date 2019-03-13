export interface IUser {
  uid: string;
  displayName: string;
}

export class User implements IUser {
  constructor(public uid: string, public displayName: string) {}
}
