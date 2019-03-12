import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }



}
