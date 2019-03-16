export interface IUser {
  uid: string;
  displayName: string;
  photoURL?: string;
}

export class User implements IUser {
  constructor(public uid: string, public displayName: string) {}
}
