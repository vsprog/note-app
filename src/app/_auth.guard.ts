import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  private uid: string;

  constructor(private router: Router, private store: Store<fromRoot.State>) {
    this.getUid();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.uid) {
      this.router.navigateByUrl('/cards/login');
      return false;
    }
    return true;
  }

  private getUid(): void {
    const currentUser: Observable<User> = this.store.select(fromRoot.getUser);
    currentUser.subscribe(user => this.uid = user.uid);
  }
}
