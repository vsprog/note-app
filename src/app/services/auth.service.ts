import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from, of } from 'rxjs';

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

  emailLogin(value: any): Observable<any> {
    return from(firebase.auth().signInWithEmailAndPassword(value.email, value.password));
  }

  signUp(value: any): Observable<any> {
    return from(firebase.auth().createUserWithEmailAndPassword(value.email, value.password));
  }

  updateProfile(value: any): Observable<any> {
    return from(firebase.auth().currentUser.updateProfile({
      displayName: value.name,
      photoURL: value.photo}));
  }

  logout(): Observable<any> {
    return from(this.afAuth.auth.signOut());
  }
}
