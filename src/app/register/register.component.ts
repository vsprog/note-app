import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() toRegister = new EventEmitter<any>();
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      photo: [''],
    });
   }

  ngOnInit() {
  }

  tryRegister(formData: any) {
    this.toRegister.emit(formData);
  }

}
