import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../store/index';
import * as user from '../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.user$ = this.store.select(fromRoot.getUser);
  }

  SignInGoogle(event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(new user.GoogleLogin());
  }

}
