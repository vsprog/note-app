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

  SignInGoogle(event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(new user.GoogleLogin());
  }

  SignOut(event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(new user.Logout());
  }
}
