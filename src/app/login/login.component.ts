import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() toLogIn = new EventEmitter<any>();
  logForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.logForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  SignIn(provider: any): void {
    this.toLogIn.emit(provider);
  }

}
