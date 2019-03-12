import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  getUser(): Observable<any> {
    return this.afAuth.authState;
  }

  googleLogin(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return from(this.afAuth.auth.signInWithPopup(provider));
  }

  signUp(value: any): Observable<any> {
    return from(firebase.auth().createUserWithEmailAndPassword(value.email, value.password));
  }

  emailLogin(value: any): Observable<any> {
    return from(firebase.auth().signInWithEmailAndPassword(value.email, value.password));
  }

  logout(): Observable<any> {
    return from(this.afAuth.auth.signOut());
  }
}
