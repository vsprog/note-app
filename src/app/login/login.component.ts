import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() toLogIn = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  SignIn(provider: any): void {
    this.toLogIn.emit(provider);
  }

}
