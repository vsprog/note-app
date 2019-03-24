import { Component, OnInit } from '@angular/core';
import * as fromRoot from './store/index';
import * as user from './store/actions/user.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new user.GetUser());
    this.user$ = this.store.select(fromRoot.getUser);
  }

  SignOut(event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(new user.Logout());
  }

  Register(userData: any): void {
    this.store.dispatch(new user.SignUp(userData));
  }

  SignIn(provider: any) {
    if (typeof provider === 'object') {
      this.store.dispatch(new user.EmailLogin(provider));
      return;
    }
    switch (provider) {
      case 'google':
        this.store.dispatch(new user.GoogleLogin());
        break;
      case 'github':
        break;
    }
  }
}
